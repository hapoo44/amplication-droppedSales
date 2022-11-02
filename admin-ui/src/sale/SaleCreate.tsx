import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { DroppedUserTitle } from "../droppedUser/DroppedUserTitle";

export const SaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <ReferenceInput
          source="droppeduser.id"
          reference="DroppedUser"
          label="dropped user"
        >
          <SelectInput optionText={DroppedUserTitle} />
        </ReferenceInput>
        <BooleanInput label="isCounted" source="isCounted" />
        <DateTimeInput label="Sale Date" source="saleDate" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
