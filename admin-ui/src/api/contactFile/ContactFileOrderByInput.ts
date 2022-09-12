import { SortOrder } from "../../util/SortOrder";

export type ContactFileOrderByInput = {
  bucket?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  filePath?: SortOrder;
  fromDate?: SortOrder;
  id?: SortOrder;
  saleRepresentativeFirstName?: SortOrder;
  saleRepresentativeLastName?: SortOrder;
  salesCount?: SortOrder;
  sex?: SortOrder;
  toDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
  utmCampaign?: SortOrder;
  weightDifference?: SortOrder;
};
