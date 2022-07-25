import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import OfferMenu from '../menu/OfferMenu'
import ProductMenu from '../menu/Productmenu'

export default function Sidebar () {
  return (
    <Box className='Sidebar'>
        <Paper >
            <ProductMenu />
            <OfferMenu />
        </Paper>
    </Box>

  )
}
