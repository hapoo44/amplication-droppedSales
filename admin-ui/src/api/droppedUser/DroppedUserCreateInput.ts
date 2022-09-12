import { ContactFileWhereUniqueInput } from "../contactFile/ContactFileWhereUniqueInput";

export type DroppedUserCreateInput = {
  bucket?: string | null;
  contactFile?: ContactFileWhereUniqueInput | null;
  createdBy?: string | null;
  dropId?: string | null;
  droppedDate?: Date | null;
  filePath?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  sequence?: number | null;
  sex?: "F" | "M" | null;
  updatedBy?: string | null;
  utmCampaign?: string | null;
  vcfString?: string | null;
  weightDifference?: number | null;
};
