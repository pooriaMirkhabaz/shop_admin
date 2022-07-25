import React, { useState } from 'react'
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Link } from 'react-router-dom'
import SegmentIcon from '@mui/icons-material/Segment'
import { Add } from '@mui/icons-material'
import CategoryIcon from '@mui/icons-material/Category'
import PostAddIcon from '@mui/icons-material/PostAdd'

export default function Productmenu () {
  const [open, setOpen] = useState<boolean>(true)

  const collapse = () => {
    setOpen(!open)
  }

  return (
    <List>
        <ListItemButton onClick={collapse}>
            <ListItemIcon >
                <LocalGroceryStoreIcon />
            </ListItemIcon>
            <ListItemText className='ListItemText'>محصولات</ListItemText>
            {open && <ExpandMoreIcon />}
            {!open && <ExpandLessIcon />}
        </ListItemButton>

        <List className='listmenuItems'>
            <Collapse in={open} >

                {/* products */}
                    <Link to='/products'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <SegmentIcon />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>لیست محصولات</ListItemText>

                        </ListItemButton>
                    </Link>

                {/* add product */}
                <Link to='/products/add'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <Add />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>افزودن محصول</ListItemText>

                        </ListItemButton>
                </Link>

                {/* category */}
                <Link to='/category'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <CategoryIcon />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>دسته بندی ها</ListItemText>

                        </ListItemButton>
                </Link>

                {/* add category */}
                <Link to='/category/add'>
                        <ListItemButton>
                                <ListItemIcon >
                                    <PostAddIcon />
                                </ListItemIcon>
                                <ListItemText className='ListItemText'>افزودن دسته بندی</ListItemText>

                        </ListItemButton>
                </Link>

            </Collapse>
        </List>

        <Divider />
    </List>
  )
}
