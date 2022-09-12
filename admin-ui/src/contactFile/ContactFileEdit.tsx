import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { DroppedUserTitle } from "../droppedUser/DroppedUserTitle";

export const ContactFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bucket" source="bucket" />
        <TextInput label="Created By" source="createdBy" />
        <ReferenceArrayInput
          source="droppedUsers"
          reference="DroppedUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DroppedUserTitle} />
        </ReferenceArrayInput>
        <TextInput label="File Path" source="filePath" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <TextInput
          label="Sale Representative FirstName"
          source="saleRepresentativeFirstName"
        />
        <TextInput
          label="Sale Representative LastName"
          source="saleRepresentativeLastName"
        />
        <NumberInput step={1} label="salesCount" source="salesCount" />
        <SelectInput
          source="sex"
          label="sex"
          choices={[
            { label: "FEMALE", value: "F" },
            { label: "MALE", value: "M" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="toDate" source="toDate" />
        <TextInput label="Updated By" source="updatedBy" />
        <TextInput label="utmCampaign" source="utmCampaign" />
        <NumberInput label="weightDifference" source="weightDifference" />
      </SimpleForm>
    </Edit>
  );
};
