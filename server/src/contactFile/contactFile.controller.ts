import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactFileService } from "./contactFile.service";
import { ContactFileControllerBase } from "./base/contactFile.controller.base";

@swagger.ApiTags("contactFiles")
@common.Controller("contactFiles")
export class ContactFileController extends ContactFileControllerBase {
  constructor(
    protected readonly service: ContactFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
