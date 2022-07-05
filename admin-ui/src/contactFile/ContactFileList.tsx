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
      </Datagrid>
    </List>
  );
};
