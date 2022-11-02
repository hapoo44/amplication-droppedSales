import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DroppedUserController } from "../droppedUser.controller";
import { DroppedUserService } from "../droppedUser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bucket: "exampleBucket",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  dropId: "exampleDropId",
  droppedDate: new Date(),
  filePath: "exampleFilePath",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  mobile: "exampleMobile",
  needGuidance: "true",
  sequence: 42,
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  vcfString: "exampleVcfString",
  weight: "exampleWeight",
  weightDifference: 42,
};
const CREATE_RESULT = {
  bucket: "exampleBucket",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  dropId: "exampleDropId",
  droppedDate: new Date(),
  filePath: "exampleFilePath",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  mobile: "exampleMobile",
  needGuidance: "true",
  sequence: 42,
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  vcfString: "exampleVcfString",
  weight: "exampleWeight",
  weightDifference: 42,
};
const FIND_MANY_RESULT = [
  {
    bucket: "exampleBucket",
    createdAt: new Date(),
    createdBy: "exampleCreatedBy",
    dropId: "exampleDropId",
    droppedDate: new Date(),
    filePath: "exampleFilePath",
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    mobile: "exampleMobile",
    needGuidance: "true",
    sequence: 42,
    updatedAt: new Date(),
    updatedBy: "exampleUpdatedBy",
    utmCampaign: "exampleUtmCampaign",
    vcfString: "exampleVcfString",
    weight: "exampleWeight",
    weightDifference: 42,
  },
];
const FIND_ONE_RESULT = {
  bucket: "exampleBucket",
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  dropId: "exampleDropId",
  droppedDate: new Date(),
  filePath: "exampleFilePath",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  mobile: "exampleMobile",
  needGuidance: "true",
  sequence: 42,
  updatedAt: new Date(),
  updatedBy: "exampleUpdatedBy",
  utmCampaign: "exampleUtmCampaign",
  vcfString: "exampleVcfString",
  weight: "exampleWeight",
  weightDifference: 42,
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

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DroppedUser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DroppedUserService,
          useValue: service,
        },
      ],
      controllers: [DroppedUserController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /droppedUsers", async () => {
    await request(app.getHttpServer())
      .post("/droppedUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        droppedDate: CREATE_RESULT.droppedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /droppedUsers", async () => {
    await request(app.getHttpServer())
      .get("/droppedUsers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          droppedDate: FIND_MANY_RESULT[0].droppedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /droppedUsers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/droppedUsers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /droppedUsers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/droppedUsers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        droppedDate: FIND_ONE_RESULT.droppedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
