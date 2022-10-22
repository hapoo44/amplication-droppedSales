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
import { DroppedUserService } from "../droppedUser.service";
import { Public } from "../../decorators/public.decorator";
import { DroppedUserCreateInput } from "./DroppedUserCreateInput";
import { DroppedUserWhereInput } from "./DroppedUserWhereInput";
import { DroppedUserWhereUniqueInput } from "./DroppedUserWhereUniqueInput";
import { DroppedUserFindManyArgs } from "./DroppedUserFindManyArgs";
import { DroppedUserUpdateInput } from "./DroppedUserUpdateInput";
import { DroppedUser } from "./DroppedUser";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DroppedUserControllerBase {
  constructor(
    protected readonly service: DroppedUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DroppedUser })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DroppedUserCreateInput
  ): Promise<DroppedUser> {
    return await this.service.create({
      data: {
        ...data,

        contactFile: data.contactFile
          ? {
              connect: data.contactFile,
            }
          : undefined,
      },
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
        needGuidance: true,
        sequence: true,
        sex: true,
        status: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        vcfString: true,
        weight: true,
        weightDifference: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [DroppedUser] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DroppedUserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<DroppedUser[]> {
    const args = plainToClass(DroppedUserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
        needGuidance: true,
        sequence: true,
        sex: true,
        status: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        vcfString: true,
        weight: true,
        weightDifference: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DroppedUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DroppedUserWhereUniqueInput
  ): Promise<DroppedUser | null> {
    const result = await this.service.findOne({
      where: params,
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
        needGuidance: true,
        sequence: true,
        sex: true,
        status: true,
        updatedAt: true,
        updatedBy: true,
        utmCampaign: true,
        vcfString: true,
        weight: true,
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
  @swagger.ApiOkResponse({ type: DroppedUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DroppedUserWhereUniqueInput,
    @common.Body() data: DroppedUserUpdateInput
  ): Promise<DroppedUser | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contactFile: data.contactFile
            ? {
                connect: data.contactFile,
              }
            : undefined,
        },
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
          needGuidance: true,
          sequence: true,
          sex: true,
          status: true,
          updatedAt: true,
          updatedBy: true,
          utmCampaign: true,
          vcfString: true,
          weight: true,
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
  @swagger.ApiOkResponse({ type: DroppedUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DroppedUserWhereUniqueInput
  ): Promise<DroppedUser | null> {
    try {
      return await this.service.delete({
        where: params,
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
          needGuidance: true,
          sequence: true,
          sex: true,
          status: true,
          updatedAt: true,
          updatedBy: true,
          utmCampaign: true,
          vcfString: true,
          weight: true,
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
}
