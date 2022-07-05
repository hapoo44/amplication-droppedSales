/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreateContactFileArgs } from "./CreateContactFileArgs";
import { UpdateContactFileArgs } from "./UpdateContactFileArgs";
import { DeleteContactFileArgs } from "./DeleteContactFileArgs";
import { ContactFileFindManyArgs } from "./ContactFileFindManyArgs";
import { ContactFileFindUniqueArgs } from "./ContactFileFindUniqueArgs";
import { ContactFile } from "./ContactFile";
import { DroppedUserFindManyArgs } from "../../droppedUser/base/DroppedUserFindManyArgs";
import { DroppedUser } from "../../droppedUser/base/DroppedUser";
import { ContactFileService } from "../contactFile.service";

@graphql.Resolver(() => ContactFile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContactFileResolverBase {
  constructor(
    protected readonly service: ContactFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _contactFilesMeta(
    @graphql.Args() args: ContactFileFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [ContactFile])
  async contactFiles(
    @graphql.Args() args: ContactFileFindManyArgs
  ): Promise<ContactFile[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => ContactFile, { nullable: true })
  async contactFile(
    @graphql.Args() args: ContactFileFindUniqueArgs
  ): Promise<ContactFile | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => ContactFile)
  async createContactFile(
    @graphql.Args() args: CreateContactFileArgs
  ): Promise<ContactFile> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => ContactFile)
  async updateContactFile(
    @graphql.Args() args: UpdateContactFileArgs
  ): Promise<ContactFile | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.Mutation(() => ContactFile)
  async deleteContactFile(
    @graphql.Args() args: DeleteContactFileArgs
  ): Promise<ContactFile | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [DroppedUser])
  async droppedUsers(
    @graphql.Parent() parent: ContactFile,
    @graphql.Args() args: DroppedUserFindManyArgs
  ): Promise<DroppedUser[]> {
    const results = await this.service.findDroppedUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
