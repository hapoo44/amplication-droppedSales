import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SaleServiceBase } from "./base/sale.service.base";

@Injectable()
export class SaleService extends SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
