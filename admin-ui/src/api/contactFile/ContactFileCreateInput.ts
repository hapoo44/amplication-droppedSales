import { DroppedUserCreateNestedManyWithoutContactFilesInput } from "./DroppedUserCreateNestedManyWithoutContactFilesInput";

export type ContactFileCreateInput = {
  bucket?: string | null;
  createdBy?: string | null;
  droppedUsers?: DroppedUserCreateNestedManyWithoutContactFilesInput;
  filePath?: string | null;
  fromDate?: Date | null;
  fromWeightDifference?: number | null;
  saleRepresentativeFirstName?: string | null;
  saleRepresentativeLastName?: string | null;
  salesCount?: number | null;
  sex?: string | null;
  toDate?: Date | null;
  toWeightDifference?: number | null;
  updatedBy?: string | null;
  utmCampaign?: string | null;
};
