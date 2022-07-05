import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ContactFileTitle } from "../contactFile/ContactFileTitle";

export const DroppedUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bucket" source="bucket" />
        <ReferenceInput
          source="contactfile.id"
          reference="ContactFile"
          label="Contact File"
        >
          <SelectInput optionText={ContactFileTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Created By" source="createdBy" />
        <TextInput label="Drop ID" source="dropId" />
        <DateTimeInput label="Dropped Date" source="droppedDate" />
        <TextInput label="File Path" source="filePath" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="Mobile" source="mobile" />
        <NumberInput step={1} label="sequence" source="sequence" />
        <NumberInput step={1} label="Updated By" source="updatedBy" />
        <TextInput label="VCF String" multiline source="vcfString" />
      </SimpleForm>
    </Create>
  );
};
