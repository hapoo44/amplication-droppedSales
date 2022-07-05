import { ContactFileWhereUniqueInput } from "../contactFile/ContactFileWhereUniqueInput";

export type DroppedUserUpdateInput = {
  bucket?: string | null;
  contactFile?: ContactFileWhereUniqueInput | null;
  createdBy?: number | null;
  dropId?: string | null;
  droppedDate?: Date | null;
  filePath?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  sequence?: number | null;
  updatedBy?: number | null;
  vcfString?: string | null;
};
