import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function AppCard(props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>{props.children}</CardContent>
    </Card>
  )
}