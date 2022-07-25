/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FormControl, FormControlLabel, Switch, TextField, Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { Box } from '@mui/system'
import ICategoryAttribute from './ICategoryAttribute'
import { useDispatch } from 'react-redux'
import { UpdateCategoryAttribute } from '../../../store/categorySlice'

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    input: {
      margin: '8px 0 !important',
      marginLeft: '12px !important',
      [theme.breakpoints.down('md')]: {
        width: '100% !important',
        marginLeft: '0 !important'
      }
    },
    box: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'start'
      }
    },
    divider: {
      margin: '12px 0 !important'
    }
  })
)

export default function AttributeItem ({ groupID, hash, title, slug, filterable, hasPrice } : ICategoryAttribute) {
  const styles = useStyles()

  const [attrTitle, setTitle] = useState<string>(title)
  const [attrSlug, setSlug] = useState<string>(slug)
  const [isFilterable, setIsFilterable] = useState<boolean>(filterable)
  const [isHasPrice, setIsHasPrice] = useState<boolean>(hasPrice)

  const dispatch = useDispatch()

  const updateCategoryAttribute = (field : string, value : string | boolean) => {
    dispatch(UpdateCategoryAttribute({ groupID, hash, field, value }))
  }

  return (

    <Box className={styles.box}>

        {/* title */}
        <FormControl className={styles.input}>
            <TextField onBlur={(event : React.FocusEvent<HTMLInputElement>) => updateCategoryAttribute(event.currentTarget.name, event.currentTarget.value) } name="title" id="title" label="عنوان - فارسی" onChange={(event : React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)} />
        </FormControl>

        {/* slug */}
        <FormControl className={styles.input}>
            <TextField onBlur={(event : React.FocusEvent<HTMLInputElement>) => updateCategoryAttribute(event.currentTarget.name, event.currentTarget.value) } name="slug" id="slug" label="اسلاگ - انگلیسی" onChange={(event : React.ChangeEvent<HTMLInputElement>) => setSlug(event.currentTarget.value)} />
        </FormControl>

        {/* filterable */}
        <FormControlLabel onClick={(event : React.MouseEvent) => setIsFilterable(!isFilterable)} label="استفاده برای فیلتر" control={<Switch color='primary' name="filterable" id="filterable" defaultChecked={isFilterable} onChange={(event : React.ChangeEvent<HTMLInputElement>) => updateCategoryAttribute(event.currentTarget.name, !isFilterable)} />} />

        {/* hasPrice */}
        <FormControlLabel onClick={(event : React.MouseEvent) => setIsHasPrice(!isHasPrice)} label="استفاده برای قیمت" control={<Switch color='primary' name="hasPrice" id="hasPrice" defaultChecked={isHasPrice} onChange={(event : React.ChangeEvent<HTMLInputElement>) => updateCategoryAttribute(event.currentTarget.name, !isHasPrice)} />} />

    </Box>
  )
}
