import { InputJsonValue } from "../../types";
import { ContactFileWhereUniqueInput } from "../contactFile/ContactFileWhereUniqueInput";

export type DroppedUserUpdateInput = {
  answers?: InputJsonValue;
  bucket?: string | null;
  contactFile?: ContactFileWhereUniqueInput | null;
  createdBy?: string | null;
  dropId?: string | null;
  droppedDate?: Date | null;
  filePath?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  needGuidance?: boolean | null;
  sequence?: number | null;
  sex?: "F" | "M" | null;
  status?: "INIT" | "SENT_NEED_GUIDANCE_SMS" | null;
  updatedBy?: string | null;
  utmCampaign?: string | null;
  vcfString?: string | null;
  weight?: string | null;
  weightDifference?: number | null;
};
