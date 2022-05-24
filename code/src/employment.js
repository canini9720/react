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
import { EmploymentCustomIterator } from './CustomIterators'

const EmploymentTitle = ({ record }) => {
  return <span>Employment Details {record ? `"${record.title}"` : ''}</span>
}

export const EmploymentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="Trade" />
      <TextField source="Institute" />
      <TextField source="From" />
      <TextField source="Working Time	" />
      <TextField source="Paid" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const EmploymentEdit = (props) => (
  <Edit title={<EmploymentTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="Trade" />
      <TextInput source="Institute" />
      <TextInput source="From" />
      <TextInput source="Working Time	" />
      <TextInput source="Paid" />
    </SimpleForm>
  </Edit>
)

export const EmploymentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Trade" />
      <TextInput source="Institute" />
      <TextInput source="From" />
      <TextInput source="Working Time	" />
      <TextInput source="Paid" />
    </SimpleForm>
  </Create>
)
