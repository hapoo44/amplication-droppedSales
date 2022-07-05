import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTACTFILE_TITLE_FIELD } from "./ContactFileTitle";

export const ContactFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bucket" source="bucket" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="createdDate" source="createdDate" />
        <TextField label="File Path" source="filePath" />
        <TextField label="ID" source="id" />
        <TextField label="Sale Representative" source="saleRepresentative" />
        <TextField label="salesCount" source="salesCount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="DroppedUser"
          target="ContactFileId"
          label="Dropped Users"
        >
          <Datagrid rowClick="show">
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
            <TextField label="sequence" source="sequence" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Updated By" source="updatedBy" />
            <TextField label="VCF String" source="vcfString" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
