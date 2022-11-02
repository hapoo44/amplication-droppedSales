import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  droppedUserId?: SortOrder;
  id?: SortOrder;
  isCounted?: SortOrder;
  saleDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
