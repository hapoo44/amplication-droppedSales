import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const SaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Drop ID" source="dropId" />
        <BooleanInput label="isChecked" source="isChecked" />
        <DateTimeInput label="Sale Date" source="saleDate" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
