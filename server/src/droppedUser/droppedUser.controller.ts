import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DroppedUserService } from "./droppedUser.service";
import { DroppedUserControllerBase } from "./base/droppedUser.controller.base";

@swagger.ApiTags("droppedUsers")
@common.Controller("droppedUsers")
export class DroppedUserController extends DroppedUserControllerBase {
  constructor(
    protected readonly service: DroppedUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
