import { DroppedUserCreateNestedManyWithoutContactFilesInput } from "./DroppedUserCreateNestedManyWithoutContactFilesInput";

export type ContactFileCreateInput = {
  bucket?: string | null;
  createdBy?: string | null;
  createdDate?: Date | null;
  droppedUsers?: DroppedUserCreateNestedManyWithoutContactFilesInput;
  filePath?: string | null;
  saleRepresentative?: string | null;
  salesCount?: number | null;
  updatedBy?: string | null;
};
