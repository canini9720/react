import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ArrayInput,
  SimpleFormIterator,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin'
import { PersonalCustomIterator } from './CustomIterators'

const PersonalTitle = ({ record }) => {
  return <span>Personal Details {record ? `"${record.title}"` : ''}</span>
}

export const PersonalList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="FlatNo" />
      <TextField source="Building" />
      <TextField source="Street" />
      <TextField source="Area" />
      <TextField source="State" />
      <TextField source="Country" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const PersonalEdit = (props) => (
  <Edit title={<PersonalTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="FlatNo" />
      <TextInput source="Building" />
      <TextInput source="Street" />
      <TextInput source="Area" />
      <TextInput source="State" />
      <TextInput source="Country" />
      <TextInput source="Taluk" />
      <TextInput source="Distrik" />
      <TextInput source="PinCode" />
      <TextInput source="State" />
      <TextInput source="PBNo:" />
      <TextInput source="FaxNo:" />
      <TextInput source="MobileNo:" />
      <TextInput source="MailSales:" />
      <TextInput source="MailSale:" />
      <TextInput source="Assart:" />
      <TextInput source="AnnualIncome:" />
    </SimpleForm>
  </Edit>
)

export const PersonalCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="FlatNo" />
      <TextInput source="Building" />
      <TextInput source="Street" />
      <TextInput source="Area" />
      <TextInput source="State" />
      <TextInput source="Country" />
      <TextInput source="Taluk" />
      <TextInput source="Distrik" />
      <TextInput source="PinCode" />
      <TextInput source="State" />
      <TextInput source="PBNo:" />
      <TextInput source="FaxNo:" />
      <TextInput source="MobileNo:" />
      <TextInput source="MailSales:" />
      <TextInput source="MailSale:" />
      <TextInput source="Assart:" />
      <TextInput source="AnnualIncome:" />
    </SimpleForm>
  </Create>
)
