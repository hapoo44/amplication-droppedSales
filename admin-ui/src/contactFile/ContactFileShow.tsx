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
  BooleanField,
} from "react-admin";

import { CONTACTFILE_TITLE_FIELD } from "./ContactFileTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const ContactFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bucket" source="bucket" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="File Path" source="filePath" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="fromWeightDifference" source="fromWeightDifference" />
        <TextField label="ID" source="id" />
        <TextField
          label="Sale Representative FirstName"
          source="saleRepresentativeFirstName"
        />
        <TextField
          label="Sale Representative LastName"
          source="saleRepresentativeLastName"
        />
        <TextField label="salesCount" source="salesCount" />
        <TextField label="sex" source="sex" />
        <TextField label="toDate" source="toDate" />
        <TextField label="toWeightDifference" source="toWeightDifference" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="utmCampaign" source="utmCampaign" />
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
            <BooleanField label="need guidance" source="needGuidance" />
            <ReferenceField label="Sale" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sequence" source="sequence" />
            <TextField label="sex" source="sex" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Updated By" source="updatedBy" />
            <TextField label="utm campaign" source="utmCampaign" />
            <TextField label="VCF String" source="vcfString" />
            <TextField label="weight" source="weight" />
            <TextField label="weight difference" source="weightDifference" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
