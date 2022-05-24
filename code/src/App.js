// in src/App.js
import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import { FormsList, FormsEdit, FormsCreate } from './forms'
import { PersonalList, PersonalEdit, PersonalCreate } from './personal'
import { DocumentList, DocumentEdit, DocumentCreate } from './document'
import { UsersCreate, UsersEdit, UsersList } from './users'
import { EducationList, EducationEdit, EducationCreate } from './education'
import { EmploymentList, EmploymentEdit, EmploymentCreate } from './employment'
import { JobList, JobEdit, JobCreate } from './job'
import UserIcon from '@material-ui/icons/Group'
import Pages from '@material-ui/icons/Pages'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import dataProvider from './dataProvider'

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="personal"
      options={{ label: 'Personal Details' }}
      list={PersonalList}
      edit={PersonalEdit}
      create={PersonalCreate}
      icon={UserIcon}
    />
    <Resource
      name="document"
      options={{ label: 'Document Details' }}
      list={DocumentList}
      edit={DocumentEdit}
      create={DocumentCreate}
      icon={UserIcon}
    />
    <Resource
      name="education"
      options={{ label: 'Education Details' }}
      list={EducationList}
      edit={EducationEdit}
      create={EducationCreate}
      icon={UserIcon}
    />
    <Resource
      name="employment"
      options={{ label: 'Employment Details' }}
      list={EmploymentList}
      edit={EmploymentEdit}
      create={EmploymentCreate}
      icon={UserIcon}
    />
    <Resource
      name="job"
      options={{ label: 'Job Details' }}
      list={JobList}
      edit={JobEdit}
      create={JobCreate}
      icon={UserIcon}
    />
    {/* <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate} icon={UserIcon} /> */}
  </Admin>
)

export default App
