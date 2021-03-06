/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ContactFile, DroppedUser } from "@prisma/client";

export class ContactFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContactFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileFindManyArgs>
  ): Promise<number> {
    return this.prisma.contactFile.count(args);
  }

  async findMany<T extends Prisma.ContactFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileFindManyArgs>
  ): Promise<ContactFile[]> {
    return this.prisma.contactFile.findMany(args);
  }
  async findOne<T extends Prisma.ContactFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileFindUniqueArgs>
  ): Promise<ContactFile | null> {
    return this.prisma.contactFile.findUnique(args);
  }
  async create<T extends Prisma.ContactFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileCreateArgs>
  ): Promise<ContactFile> {
    return this.prisma.contactFile.create<T>(args);
  }
  async update<T extends Prisma.ContactFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileUpdateArgs>
  ): Promise<ContactFile> {
    return this.prisma.contactFile.update<T>(args);
  }
  async delete<T extends Prisma.ContactFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFileDeleteArgs>
  ): Promise<ContactFile> {
    return this.prisma.contactFile.delete(args);
  }

  async findDroppedUsers(
    parentId: string,
    args: Prisma.DroppedUserFindManyArgs
  ): Promise<DroppedUser[]> {
    return this.prisma.contactFile
      .findUnique({
        where: { id: parentId },
      })
      .droppedUsers(args);
  }
}
