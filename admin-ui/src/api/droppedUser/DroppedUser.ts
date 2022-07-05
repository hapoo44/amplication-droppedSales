import { ContactFile } from "../contactFile/ContactFile";

export type DroppedUser = {
  bucket: string | null;
  contactFile?: ContactFile | null;
  createdAt: Date;
  createdBy: number | null;
  dropId: string | null;
  droppedDate: Date | null;
  filePath: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobile: string | null;
  sequence: number | null;
  updatedAt: Date;
  updatedBy: number | null;
  vcfString: string | null;
};
