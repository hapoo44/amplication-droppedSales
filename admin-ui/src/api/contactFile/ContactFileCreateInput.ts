import { DroppedUserCreateNestedManyWithoutContactFilesInput } from "./DroppedUserCreateNestedManyWithoutContactFilesInput";

export type ContactFileCreateInput = {
  createdBy?: string | null;
  droppedUsers?: DroppedUserCreateNestedManyWithoutContactFilesInput;
  filePath?: string | null;
  fromDate?: Date | null;
  saleRepresentativeFirstName?: string | null;
  saleRepresentativeLastName?: string | null;
  salesCount?: number | null;
  sex?: "F" | "M" | null;
  toDate?: Date | null;
  updatedBy?: string | null;
  utmCampaign?: string | null;
  weightDifference?: number | null;
};
