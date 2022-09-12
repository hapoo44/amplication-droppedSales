import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ContactFileController } from "../contactFile.controller";
import { ContactFileService } from "../contactFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  filePath: "exampleFilePath",
  fromDate: new Date(),
  id: "exampleId",
  saleRepresentativeFirstName: "exampleSaleRepresentativeFirstName",
  saleRepresentativeLastName: "exampleSaleRepresentativeLastName",
  salesCount: 42,
  toDate: new Date(),
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  weightDifference: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  filePath: "exampleFilePath",
  fromDate: new Date(),
  id: "exampleId",
  saleRepresentativeFirstName: "exampleSaleRepresentativeFirstName",
  saleRepresentativeLastName: "exampleSaleRepresentativeLastName",
  salesCount: 42,
  toDate: new Date(),
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  weightDifference: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    createdBy: "exampleCreatedBy",
    filePath: "exampleFilePath",
    fromDate: new Date(),
    id: "exampleId",
    saleRepresentativeFirstName: "exampleSaleRepresentativeFirstName",
    saleRepresentativeLastName: "exampleSaleRepresentativeLastName",
    salesCount: 42,
    toDate: new Date(),
    updatedAt: new Date(),
    updatedBy: "exampleUpdatedBy",
    utmCampaign: "exampleUtmCampaign",
    weightDifference: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  filePath: "exampleFilePath",
  fromDate: new Date(),
  id: "exampleId",
  saleRepresentativeFirstName: "exampleSaleRepresentativeFirstName",
  saleRepresentativeLastName: "exampleSaleRepresentativeLastName",
  salesCount: 42,
  toDate: new Date(),
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  weightDifference: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("ContactFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContactFileService,
          useValue: service,
        },
      ],
      controllers: [ContactFileController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contactFiles", async () => {
    await request(app.getHttpServer())
      .post("/contactFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contactFiles", async () => {
    await request(app.getHttpServer())
      .get("/contactFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contactFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contactFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
