// in src/Dashboard.js
import * as React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const HomePage = () => (
  <Card>
    <CardHeader title="Welcome To Membership System" />
    <CardContent>
      Select the tabs from the left to enter data for each category
    </CardContent>
  </Card>
)

export default HomePage
