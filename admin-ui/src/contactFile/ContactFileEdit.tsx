import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { DroppedUserTitle } from "../droppedUser/DroppedUserTitle";

export const ContactFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <NumberInput label="salesCount" source="salesCount" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
