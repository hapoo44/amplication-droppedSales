import { ContactFile } from "../contactFile/ContactFile";
import { Sale } from "../sale/Sale";

export type DroppedUser = {
  bucket: string | null;
  contactFile?: ContactFile | null;
  createdAt: Date;
  createdBy: string | null;
  dropId: string | null;
  droppedDate: Date | null;
  filePath: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobile: string | null;
  needGuidance: boolean | null;
  sale?: Sale | null;
  sequence: number | null;
  sex?: "F" | "M" | null;
  status?: "INIT" | "SENT_NEED_GUIDANCE_SMS" | null;
  updatedAt: Date;
  updatedBy: string | null;
  utmCampaign: string | null;
  vcfString: string | null;
  weight: string | null;
  weightDifference: number | null;
};
