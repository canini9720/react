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
import { EducationCustomIterator } from './CustomIterators'

const EducationTitle = ({ record }) => {
  return <span>Education Details {record ? `"${record.title}"` : ''}</span>
}

export const EducationList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="Trade" />
      <TextField source="Institute" />
      <TextField source="Passed" />
      <TextField source="Grade" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const EducationEdit = (props) => (
  <Edit title={<EducationTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="Trade" />
      <TextInput source="Institute" />
      <TextInput source="Passed" />
      <TextInput source="Grade" />
    </SimpleForm>
  </Edit>
)

export const EducationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Trade" />
      <TextInput source="Institute" />
      <TextInput source="Passed" />
      <TextInput source="Grade" />
    </SimpleForm>
  </Create>
)
