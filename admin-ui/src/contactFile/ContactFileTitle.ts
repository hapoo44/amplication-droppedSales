import { ContactFile as TContactFile } from "../api/contactFile/ContactFile";

export const CONTACTFILE_TITLE_FIELD = "saleRepresentativeFirstName";

export const ContactFileTitle = (record: TContactFile): string => {
  return record.saleRepresentativeFirstName || record.id;
};
