import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactFileWhereUniqueInput } from "../contactFile/ContactFileWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DroppedUserWhereInput = {
  bucket?: StringNullableFilter;
  contactFile?: ContactFileWhereUniqueInput;
  createdAt?: DateTimeFilter;
  createdBy?: IntNullableFilter;
  dropId?: StringNullableFilter;
  droppedDate?: DateTimeNullableFilter;
  filePath?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobile?: StringNullableFilter;
  sequence?: IntNullableFilter;
  updatedBy?: IntNullableFilter;
  vcfString?: StringNullableFilter;
};
