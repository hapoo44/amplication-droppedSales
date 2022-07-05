import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContactFileServiceBase } from "./base/contactFile.service.base";

@Injectable()
export class ContactFileService extends ContactFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
