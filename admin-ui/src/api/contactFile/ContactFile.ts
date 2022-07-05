import { DroppedUser } from "../droppedUser/DroppedUser";

export type ContactFile = {
  bucket: string | null;
  createdAt: Date;
  createdBy: string | null;
  createdDate: Date | null;
  droppedUsers?: Array<DroppedUser>;
  filePath: string | null;
  id: string;
  saleRepresentative: string | null;
  salesCount: number | null;
  updatedAt: Date;
  updatedBy: Date | null;
};
