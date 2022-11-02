import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { ContactFileTitle } from "../contactFile/ContactFileTitle";
import { SaleTitle } from "../sale/SaleTitle";

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
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Drop ID" source="dropId" />
        <DateTimeInput label="Dropped Date" source="droppedDate" />
        <TextInput label="File Path" source="filePath" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="Mobile" source="mobile" />
        <BooleanInput label="need guidance" source="needGuidance" />
        <ReferenceInput source="sale.id" reference="Sale" label="Sales">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="sequence" source="sequence" />
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
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "INIT", value: "INIT" },
            {
              label: "SENT_NEED_GUIDANCE_SMS",
              value: "SENT_NEED_GUIDANCE_SMS",
            },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Updated By" source="updatedBy" />
        <TextInput label="utm campaign" source="utmCampaign" />
        <TextInput label="VCF String" multiline source="vcfString" />
        <TextInput label="weight" source="weight" />
        <NumberInput
          step={1}
          label="weight difference"
          source="weightDifference"
        />
      </SimpleForm>
    </Create>
  );
};
