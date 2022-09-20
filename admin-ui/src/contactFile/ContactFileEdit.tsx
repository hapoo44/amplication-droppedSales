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
        <NumberInput
          label="fromWeightDifference"
          source="fromWeightDifference"
        />
        <TextInput
          label="Sale Representative FirstName"
          source="saleRepresentativeFirstName"
        />
        <TextInput
          label="Sale Representative LastName"
          source="saleRepresentativeLastName"
        />
        <NumberInput step={1} label="salesCount" source="salesCount" />
        <TextInput label="sex" source="sex" />
        <DateTimeInput label="toDate" source="toDate" />
        <NumberInput label="toWeightDifference" source="toWeightDifference" />
        <TextInput label="Updated By" source="updatedBy" />
        <TextInput label="utmCampaign" source="utmCampaign" />
      </SimpleForm>
    </Edit>
  );
};
