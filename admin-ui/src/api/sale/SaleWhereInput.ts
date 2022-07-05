import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SaleWhereInput = {
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  dropId?: StringNullableFilter;
  id?: StringFilter;
  isChecked?: BooleanNullableFilter;
  saleDate?: DateTimeNullableFilter;
  updatedBy?: DateTimeNullableFilter;
};
