import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const SaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Drop ID" source="dropId" />
        <BooleanInput label="isCounted" source="isCounted" />
        <DateTimeInput label="Sale Date" source="saleDate" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
