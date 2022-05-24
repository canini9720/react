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
import { DocumentCustomIterator } from './CustomIterators'

const DocumentTitle = ({ record }) => {
  return <span>Document Details {record ? `"${record.title}"` : ''}</span>
}

export const DocumentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="Passport" />
      <TextField source="VISA" />
      <TextField source="EID" />
      <TextField source="Driving-LVA" />
      <TextField source="Bank-Account-Current" />
      <TextField source="Bank-Account-Saving" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const DocumentEdit = (props) => (
  <Edit title={<DocumentTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="Passport" />
      <TextInput source="VISA" />
      <TextInput source="EID" />
      <TextInput source="Driving-LVA" />
      <TextInput source="Bank-Account-Current" />
      <TextInput source="Bank-Account-Saving" />
    </SimpleForm>
  </Edit>
)

export const DocumentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Passport" />
      <TextInput source="VISA" />
      <TextInput source="EID" />
      <TextInput source="Driving-LVA" />
      <TextInput source="Bank-Account-Current" />
      <TextInput source="Bank-Account-Saving" />
    </SimpleForm>
  </Create>
)
