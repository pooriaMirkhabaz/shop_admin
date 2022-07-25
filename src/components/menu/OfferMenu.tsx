import React, { useState } from 'react'
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Link } from 'react-router-dom'
import CropFreeIcon from '@mui/icons-material/CropFree'
import StarRateIcon from '@mui/icons-material/StarRate'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

export default function OfferMenu () {
  const [open, setOpen] = useState<boolean>(false)

  const collapse = () => {
    setOpen(!open)
  }

  return (
    <List>
        <ListItemButton onClick={collapse}>
            <ListItemIcon >
                <StarRateIcon />
            </ListItemIcon>
            <ListItemText className='ListItemText'>تخفیفات ویژه</ListItemText>
            {open && <ExpandMoreIcon />}
            {!open && <ExpandLessIcon />}
        </ListItemButton>

        <List className='listmenuItems'>
            <Collapse in={open} >

                {/* products */}
                    <Link to='/products'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <CropFreeIcon />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>کدهای تخفیف </ListItemText>

                        </ListItemButton>
                    </Link>

                {/* add product */}
                <Link to='/products/add'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <PlaylistAddIcon />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>ایجاد کد تخفیف</ListItemText>

                        </ListItemButton>
                </Link>

            </Collapse>
        </List>

        <Divider />
    </List>
  )
}
