import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DroppedUserListRelationFilter } from "../droppedUser/DroppedUserListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContactFileWhereInput = {
  bucket?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  droppedUsers?: DroppedUserListRelationFilter;
  filePath?: StringNullableFilter;
  fromDate?: DateTimeNullableFilter;
  fromWeightDifference?: FloatNullableFilter;
  id?: StringFilter;
  saleRepresentativeFirstName?: StringNullableFilter;
  saleRepresentativeLastName?: StringNullableFilter;
  salesCount?: IntNullableFilter;
  sex?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
  toWeightDifference?: FloatNullableFilter;
  updatedBy?: StringNullableFilter;
  utmCampaign?: StringNullableFilter;
};
