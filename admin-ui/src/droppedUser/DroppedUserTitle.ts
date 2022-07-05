import { DroppedUser as TDroppedUser } from "../api/droppedUser/DroppedUser";

export const DROPPEDUSER_TITLE_FIELD = "firstName";

export const DroppedUserTitle = (record: TDroppedUser): string => {
  return record.firstName || record.id;
};
