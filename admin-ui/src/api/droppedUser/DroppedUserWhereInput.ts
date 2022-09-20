import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactFileWhereUniqueInput } from "../contactFile/ContactFileWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DroppedUserWhereInput = {
  bucket?: StringNullableFilter;
  contactFile?: ContactFileWhereUniqueInput;
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  dropId?: StringNullableFilter;
  droppedDate?: DateTimeNullableFilter;
  filePath?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobile?: StringNullableFilter;
  sequence?: IntNullableFilter;
  sex?: "F" | "M";
  updatedBy?: StringNullableFilter;
  utmCampaign?: StringNullableFilter;
  vcfString?: StringNullableFilter;
  weight?: StringNullableFilter;
  weightDifference?: IntNullableFilter;
};
