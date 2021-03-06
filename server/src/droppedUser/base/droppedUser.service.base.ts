/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, DroppedUser, ContactFile } from "@prisma/client";

export class DroppedUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DroppedUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserFindManyArgs>
  ): Promise<number> {
    return this.prisma.droppedUser.count(args);
  }

  async findMany<T extends Prisma.DroppedUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserFindManyArgs>
  ): Promise<DroppedUser[]> {
    return this.prisma.droppedUser.findMany(args);
  }
  async findOne<T extends Prisma.DroppedUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserFindUniqueArgs>
  ): Promise<DroppedUser | null> {
    return this.prisma.droppedUser.findUnique(args);
  }
  async create<T extends Prisma.DroppedUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserCreateArgs>
  ): Promise<DroppedUser> {
    return this.prisma.droppedUser.create<T>(args);
  }
  async update<T extends Prisma.DroppedUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserUpdateArgs>
  ): Promise<DroppedUser> {
    return this.prisma.droppedUser.update<T>(args);
  }
  async delete<T extends Prisma.DroppedUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DroppedUserDeleteArgs>
  ): Promise<DroppedUser> {
    return this.prisma.droppedUser.delete(args);
  }

  async getContactFile(parentId: string): Promise<ContactFile | null> {
    return this.prisma.droppedUser
      .findUnique({
        where: { id: parentId },
      })
      .contactFile();
  }
}
