import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CONTACTFILE_TITLE_FIELD } from "../contactFile/ContactFileTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const DroppedUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Dropped Users"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
