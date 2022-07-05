import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DroppedUserListRelationFilter } from "../droppedUser/DroppedUserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContactFileWhereInput = {
  bucket?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  droppedUsers?: DroppedUserListRelationFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  saleRepresentative?: StringNullableFilter;
  salesCount?: IntNullableFilter;
  updatedBy?: DateTimeNullableFilter;
};
