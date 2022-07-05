import { Module } from "@nestjs/common";
import { ContactFileModuleBase } from "./base/contactFile.module.base";
import { ContactFileService } from "./contactFile.service";
import { ContactFileController } from "./contactFile.controller";
import { ContactFileResolver } from "./contactFile.resolver";

@Module({
  imports: [ContactFileModuleBase],
  controllers: [ContactFileController],
  providers: [ContactFileService, ContactFileResolver],
  exports: [ContactFileService],
})
export class ContactFileModule {}
