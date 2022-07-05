import { DroppedUserUpdateManyWithoutContactFilesInput } from "./DroppedUserUpdateManyWithoutContactFilesInput";

export type ContactFileUpdateInput = {
  bucket?: string | null;
  createdBy?: string | null;
  createdDate?: Date | null;
  droppedUsers?: DroppedUserUpdateManyWithoutContactFilesInput;
  filePath?: string | null;
  saleRepresentative?: string | null;
  salesCount?: number | null;
  updatedBy?: Date | null;
};
