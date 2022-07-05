import { SortOrder } from "../../util/SortOrder";

export type ContactFileOrderByInput = {
  bucket?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  createdDate?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  saleRepresentative?: SortOrder;
  salesCount?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
