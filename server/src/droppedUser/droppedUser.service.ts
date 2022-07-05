import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DroppedUserServiceBase } from "./base/droppedUser.service.base";

@Injectable()
export class DroppedUserService extends DroppedUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
