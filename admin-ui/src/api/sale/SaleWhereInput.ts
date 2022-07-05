import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SaleWhereInput = {
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  dropId?: StringNullableFilter;
  id?: StringFilter;
  saleDate?: DateTimeNullableFilter;
  updatedBy?: DateTimeNullableFilter;
};
