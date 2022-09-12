/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ContactFileService } from "../contactFile.service";
import { Public } from "../../decorators/public.decorator";
import { ContactFileCreateInput } from "./ContactFileCreateInput";
import { ContactFileWhereInput } from "./ContactFileWhereInput";
import { ContactFileWhereUniqueInput } from "./ContactFileWhereUniqueInput";
import { ContactFileFindManyArgs } from "./ContactFileFindManyArgs";
import { ContactFileUpdateInput } from "./ContactFileUpdateInput";
import { ContactFile } from "./ContactFile";
import { DroppedUserFindManyArgs } from "../../droppedUser/base/DroppedUserFindManyArgs";
import { DroppedUser } from "../../droppedUser/base/DroppedUser";
import { DroppedUserWhereUniqueInput } from "../../droppedUser/base/DroppedUserWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContactFileControllerBase {
  constructor(
    protected readonly service: ContactFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContactFile })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ContactFileCreateInput
  ): Promise<ContactFile> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        filePath: true,
        fromDate: true,
        id: true,
        saleRepresentativeFirstName: true,
        saleRepresentativeLastName: true,
        salesCount: true,
        sex: true,
        toDate: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        weightDifference: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [ContactFile] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ContactFileFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ContactFile[]> {
    const args = plainToClass(ContactFileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        filePath: true,
        fromDate: true,
        id: true,
        saleRepresentativeFirstName: true,
        saleRepresentativeLastName: true,
        salesCount: true,
        sex: true,
        toDate: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        weightDifference: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContactFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ContactFileWhereUniqueInput
  ): Promise<ContactFile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        filePath: true,
        fromDate: true,
        id: true,
        saleRepresentativeFirstName: true,
        saleRepresentativeLastName: true,
        salesCount: true,
        sex: true,
        toDate: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        weightDifference: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ContactFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ContactFileWhereUniqueInput,
    @common.Body() data: ContactFileUpdateInput
  ): Promise<ContactFile | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          filePath: true,
          fromDate: true,
          id: true,
          saleRepresentativeFirstName: true,
          saleRepresentativeLastName: true,
          salesCount: true,
          sex: true,
          toDate: true,
          updatedAt: true,
          updatedBy: true,
          utmCampaign: true,
          weightDifference: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ContactFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ContactFileWhereUniqueInput
  ): Promise<ContactFile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          filePath: true,
          fromDate: true,
          id: true,
          saleRepresentativeFirstName: true,
          saleRepresentativeLastName: true,
          salesCount: true,
          sex: true,
          toDate: true,
          updatedAt: true,
          updatedBy: true,
          utmCampaign: true,
          weightDifference: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/droppedUsers")
  @ApiNestedQuery(DroppedUserFindManyArgs)
  async findManyDroppedUsers(
    @common.Req() request: Request,
    @common.Param() params: ContactFileWhereUniqueInput
  ): Promise<DroppedUser[]> {
    const query = plainToClass(DroppedUserFindManyArgs, request.query);
    const results = await this.service.findDroppedUsers(params.id, {
      ...query,
      select: {
        bucket: true,

        contactFile: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        createdBy: true,
        dropId: true,
        droppedDate: true,
        filePath: true,
        firstName: true,
        id: true,
        lastName: true,
        mobile: true,
        sequence: true,
        sex: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        vcfString: true,
        weightDifference: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @Public()
  @common.Post("/:id/droppedUsers")
  async connectDroppedUsers(
    @common.Param() params: ContactFileWhereUniqueInput,
    @common.Body() body: DroppedUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      droppedUsers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Patch("/:id/droppedUsers")
  async updateDroppedUsers(
    @common.Param() params: ContactFileWhereUniqueInput,
    @common.Body() body: DroppedUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      droppedUsers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Delete("/:id/droppedUsers")
  async disconnectDroppedUsers(
    @common.Param() params: ContactFileWhereUniqueInput,
    @common.Body() body: DroppedUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      droppedUsers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
