import { ContactFile as TContactFile } from "../api/contactFile/ContactFile";

export const CONTACTFILE_TITLE_FIELD = "bucket";

export const ContactFileTitle = (record: TContactFile): string => {
  return record.bucket || record.id;
};
