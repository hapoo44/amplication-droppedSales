import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Drop ID" source="dropId" />
        <DateTimeInput label="Sale Date" source="saleDate" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
