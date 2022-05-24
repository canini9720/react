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
import { JobCustomIterator } from './CustomIterators'

const JobTitle = ({ record }) => {
  return <span>Job Details {record ? `"${record.title}"` : ''}</span>
}

export const JobList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="Trade" />
      <TextField source="Location" />
      <TextField source="Free From" />
      <TextField source="Working Time	" />
      <TextField source="Paid" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const JobEdit = (props) => (
  <Edit title={<JobTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="Trade" />
      <TextInput source="Location" />
      <TextInput source="Free From" />
      <TextInput source="Working Time	" />
      <TextInput source="Paid" />
    </SimpleForm>
  </Edit>
)

export const JobCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Trade" />
      <TextInput source="Location" />
      <TextInput source="Free From" />
      <TextInput source="Working Time	" />
      <TextInput source="Paid" />
    </SimpleForm>
  </Create>
)
