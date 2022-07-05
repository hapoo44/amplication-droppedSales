import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ContactFileResolverBase } from "./base/contactFile.resolver.base";
import { ContactFile } from "./base/ContactFile";
import { ContactFileService } from "./contactFile.service";

@graphql.Resolver(() => ContactFile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContactFileResolver extends ContactFileResolverBase {
  constructor(
    protected readonly service: ContactFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
