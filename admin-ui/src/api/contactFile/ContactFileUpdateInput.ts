import { DroppedUserUpdateManyWithoutContactFilesInput } from "./DroppedUserUpdateManyWithoutContactFilesInput";

export type ContactFileUpdateInput = {
  createdBy?: string | null;
  droppedUsers?: DroppedUserUpdateManyWithoutContactFilesInput;
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
