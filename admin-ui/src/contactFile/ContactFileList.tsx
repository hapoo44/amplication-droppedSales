import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContactFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
