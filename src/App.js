import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import AppHeader from './components/AppHeader.js'
import AppForm from './components/AppForm.js'
import AppTable from './components/AppTable.js'
import AppFooter from './components/AppFooter.js'

function App() {
  return (
    <>
      <Grid container spacing={2} sx={style.container}>
        <Grid item lg></Grid>
        <Grid item lg={3}>
          <Paper sx={style.main} elevation={4}>
            <AppHeader></AppHeader>
            <AppForm></AppForm>
          </Paper>
        </Grid>
        <Grid item lg></Grid>
        <Grid item lg={7}>
          <AppTable></AppTable>
        </Grid>
      </Grid>
      <Box sx={style.footer}>
        <AppFooter></AppFooter>
      </Box>
    </>
  )
}

const style = {
  container: {
    paddingTop: '10vh',
    minHeight: '100vh',
  },
  main: {
    p: 3,
  },
  header: {
    width: '15vw',
    margin: 'auto',
  },
  form: {
    mt: 6,
  },
  footer: {
    paddingBottom: '3vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
}

export default App
