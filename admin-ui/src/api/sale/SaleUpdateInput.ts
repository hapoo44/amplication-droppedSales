import { DroppedUserWhereUniqueInput } from "../droppedUser/DroppedUserWhereUniqueInput";

export type SaleUpdateInput = {
  createdBy?: string | null;
  droppedUser?: DroppedUserWhereUniqueInput | null;
  isCounted?: boolean | null;
  saleDate?: Date | null;
  updatedBy?: string | null;
};
