import { DroppedUser } from "../droppedUser/DroppedUser";

export type ContactFile = {
  bucket: string | null;
  createdAt: Date;
  createdBy: string | null;
  droppedUsers?: Array<DroppedUser>;
  filePath: string | null;
  fromDate: Date | null;
  fromWeightDifference: number | null;
  id: string;
  saleRepresentativeFirstName: string | null;
  saleRepresentativeLastName: string | null;
  salesCount: number | null;
  sex: string | null;
  toDate: Date | null;
  toWeightDifference: number | null;
  updatedAt: Date;
  updatedBy: string | null;
  utmCampaign: string | null;
};
