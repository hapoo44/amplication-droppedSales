import { Module } from "@nestjs/common";
import { DroppedUserModuleBase } from "./base/droppedUser.module.base";
import { DroppedUserService } from "./droppedUser.service";
import { DroppedUserController } from "./droppedUser.controller";
import { DroppedUserResolver } from "./droppedUser.resolver";

@Module({
  imports: [DroppedUserModuleBase],
  controllers: [DroppedUserController],
  providers: [DroppedUserService, DroppedUserResolver],
  exports: [DroppedUserService],
})
export class DroppedUserModule {}
