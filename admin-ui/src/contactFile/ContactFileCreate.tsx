import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DroppedUserTitle } from "../droppedUser/DroppedUserTitle";

export const ContactFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bucket" source="bucket" />
        <TextInput label="Created By" source="createdBy" />
        <DateInput label="createdDate" source="createdDate" />
        <ReferenceArrayInput
          source="droppedUsers"
          reference="DroppedUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DroppedUserTitle} />
        </ReferenceArrayInput>
        <TextInput label="File Path" source="filePath" />
        <TextInput label="Sale Representative" source="saleRepresentative" />
        <NumberInput step={1} label="salesCount" source="salesCount" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
