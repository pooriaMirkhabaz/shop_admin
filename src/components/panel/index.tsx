import React from 'react'
import { Box, Grid } from '@mui/material'
import RenderRoutes from '../../router/RenderRoutes'
import RTL from '../../theme/RTL'
import Navbar from '../partials/Navbar'
import Sidebar from '../partials/Sidebar'

export default function Panel () {
  return (
    <RTL>
        <Box className='dashboard-container'>

          {/* navbar */}
          <Navbar />

          <Grid container className='mainSection'>

          {/* Sidebar section */}
              <Grid item xs={12} sm={12} md={12} lg={3} xl={2}>
                  <Sidebar />
              </Grid>

          {/* content section */}
              <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
                <RenderRoutes />
              </Grid>

          </Grid>

        </Box>
    </RTL>
  )
}
