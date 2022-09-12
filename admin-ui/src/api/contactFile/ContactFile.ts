import { DroppedUser } from "../droppedUser/DroppedUser";

export type ContactFile = {
  createdAt: Date;
  createdBy: string | null;
  droppedUsers?: Array<DroppedUser>;
  filePath: string | null;
  fromDate: Date | null;
  id: string;
  saleRepresentativeFirstName: string | null;
  saleRepresentativeLastName: string | null;
  salesCount: number | null;
  sex?: "F" | "M" | null;
  toDate: Date | null;
  updatedAt: Date;
  updatedBy: string | null;
  utmCampaign: string | null;
  weightDifference: number | null;
};
