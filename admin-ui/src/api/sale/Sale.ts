import { DroppedUser } from "../droppedUser/DroppedUser";

export type Sale = {
  createdAt: Date;
  createdBy: string | null;
  droppedUser?: DroppedUser | null;
  id: string;
  isCounted: boolean | null;
  saleDate: Date | null;
  updatedAt: Date;
  updatedBy: string | null;
};
