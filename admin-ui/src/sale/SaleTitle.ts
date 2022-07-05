import { Sale as TSale } from "../api/sale/Sale";

export const SALE_TITLE_FIELD = "createdBy";

export const SaleTitle = (record: TSale): string => {
  return record.createdBy || record.id;
};
