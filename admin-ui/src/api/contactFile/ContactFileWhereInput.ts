import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DroppedUserListRelationFilter } from "../droppedUser/DroppedUserListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ContactFileWhereInput = {
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  droppedUsers?: DroppedUserListRelationFilter;
  filePath?: StringNullableFilter;
  fromDate?: DateTimeNullableFilter;
  id?: StringFilter;
  saleRepresentativeFirstName?: StringNullableFilter;
  saleRepresentativeLastName?: StringNullableFilter;
  salesCount?: IntNullableFilter;
  sex?: "F" | "M";
  toDate?: DateTimeNullableFilter;
  updatedBy?: StringNullableFilter;
  utmCampaign?: StringNullableFilter;
  weightDifference?: FloatNullableFilter;
};
