import React from 'react'
import { Box, Button, Divider, IconButton, Theme, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import ICategoryGroup from './ICategoryGroup'
import { Add, Delete } from '@mui/icons-material'
import AttributeItem from './AttributeItem'
import { useDispatch } from 'react-redux'
import { addNewCategoryAttribute, deleteCategoryGroup } from '../../../store/categorySlice'

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    input: {
      margin: '8px 0 !important'
    },
    btn: {
      margin: '8px 0 !important'
    },
    typography: {
      margin: '12px 0 !important'
    },
    divider: {
      margin: '12px 0 !important'
    },
    Add: {
      marginRight: '8px !important'
    }
  })
)

const CategoryGroup :React.FC<ICategoryGroup> = ({ hash, title, attributes } : ICategoryGroup) => {
  const styles = useStyles()

  const dispatch = useDispatch()

  const handleAddNewAttribute = () => {
    dispatch(addNewCategoryAttribute(hash))
  }

  const handleRemoveCategoryGroup = () => {
    dispatch(deleteCategoryGroup(hash))
  }

  return (
    <Box>
        <Divider className={styles.divider} />
        <Typography className={styles.typography} >
        {title}
        <IconButton onClick={handleRemoveCategoryGroup}>
          <Delete />
        </IconButton>
        </Typography>

        {/* attributes */}
        {attributes.map((attr) => <AttributeItem key={attr.hash} {...attr} />)}

        {/* add new attribute */}
        <Button className={styles.btn} onClick={handleAddNewAttribute} variant="contained" startIcon={<Add className={styles.Add} />} >افزودن ویژگی جدید</Button>

    </Box>
  )
}
export default CategoryGroup
