import { DroppedUserUpdateManyWithoutContactFilesInput } from "./DroppedUserUpdateManyWithoutContactFilesInput";

export type ContactFileUpdateInput = {
  bucket?: string | null;
  createdBy?: string | null;
  droppedUsers?: DroppedUserUpdateManyWithoutContactFilesInput;
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
