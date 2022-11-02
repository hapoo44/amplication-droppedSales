import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DROPPEDUSER_TITLE_FIELD } from "../droppedUser/DroppedUserTitle";

export const SaleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <ReferenceField
          label="dropped user"
          source="droppeduser.id"
          reference="DroppedUser"
        >
          <TextField source={DROPPEDUSER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isCounted" source="isCounted" />
        <TextField label="Sale Date" source="saleDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
