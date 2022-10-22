import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { CONTACTFILE_TITLE_FIELD } from "../contactFile/ContactFileTitle";

export const DroppedUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="answers" source="answers" />
        <TextField label="Bucket" source="bucket" />
        <ReferenceField
          label="Contact File"
          source="contactfile.id"
          reference="ContactFile"
        >
          <TextField source={CONTACTFILE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Drop ID" source="dropId" />
        <TextField label="Dropped Date" source="droppedDate" />
        <TextField label="File Path" source="filePath" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="Mobile" source="mobile" />
        <BooleanField label="need guidance" source="needGuidance" />
        <TextField label="sequence" source="sequence" />
        <TextField label="sex" source="sex" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="utm campaign" source="utmCampaign" />
        <TextField label="VCF String" source="vcfString" />
        <TextField label="weight" source="weight" />
        <TextField label="weight difference" source="weightDifference" />
      </SimpleShowLayout>
    </Show>
  );
};
