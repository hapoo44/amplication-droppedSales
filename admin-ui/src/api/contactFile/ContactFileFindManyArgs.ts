import { ContactFileWhereInput } from "./ContactFileWhereInput";
import { ContactFileOrderByInput } from "./ContactFileOrderByInput";

export type ContactFileFindManyArgs = {
  where?: ContactFileWhereInput;
  orderBy?: Array<ContactFileOrderByInput>;
  skip?: number;
  take?: number;
};
