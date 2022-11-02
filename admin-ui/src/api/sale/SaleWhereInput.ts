import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DroppedUserWhereUniqueInput } from "../droppedUser/DroppedUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SaleWhereInput = {
  createdAt?: DateTimeFilter;
  createdBy?: StringNullableFilter;
  droppedUser?: DroppedUserWhereUniqueInput;
  id?: StringFilter;
  isCounted?: BooleanNullableFilter;
  saleDate?: DateTimeNullableFilter;
  updatedBy?: StringNullableFilter;
};
