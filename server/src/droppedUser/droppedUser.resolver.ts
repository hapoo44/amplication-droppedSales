import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DroppedUserResolverBase } from "./base/droppedUser.resolver.base";
import { DroppedUser } from "./base/DroppedUser";
import { DroppedUserService } from "./droppedUser.service";

@graphql.Resolver(() => DroppedUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DroppedUserResolver extends DroppedUserResolverBase {
  constructor(
    protected readonly service: DroppedUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
