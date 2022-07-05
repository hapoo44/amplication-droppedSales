import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  dropId?: SortOrder;
  id?: SortOrder;
  saleDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
