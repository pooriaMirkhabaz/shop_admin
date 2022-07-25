/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, Divider, FormControl, TextField, Theme } from '@mui/material'
import Content from '../partials/Content'
import { makeStyles, createStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Add, Save } from '@mui/icons-material'
import CategoryGroup from './attribute/CategoryGroup'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCategoryGroup, saveCategory, UpdateCategory } from '../../store/categorySlice'
import IRootState from '../../store/IRootState'
import ICategoryGroup from './attribute/ICategoryGroup'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    input: {
      margin: '8px 0 !important'
    },
    dialog: {
      margin: '12px 0 !important'
    },
    titleError: {
      color: 'red'
    },
    attributeError: {
      color: 'red'
    },
    Add: {
      marginRight: '8px !important'
    },
    divider: {
      margin: '12px 0 !important'
    },
    saveBox: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
)

export default function AddCategory () {
  const styles = useStyles()

  const dispatch = useDispatch<any>()
  const category = useSelector((state : IRootState) => state.category)
  const [open, setOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<boolean>(false)
  const [groupTitle, setGroupTitle] = useState<string>('')
  const [groupTitleError, setGroupTitleError] = useState<boolean>(false)
  const [attributeError, setAttributeError] = useState<boolean>(false)
  const [categoryError, setCategoryError] = useState<boolean>(false)

  const handleShowDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleNewCategoryGroup = () => {
    if (groupTitle.trim()) {
      dispatch(addNewCategoryGroup(groupTitle))
      setGroupTitle('')
      setOpen(false)
      setGroupTitleError(false)
      return true
    }
    setGroupTitleError(true)
  }

  const updateCategory = (field : string, value : string) => {
    dispatch(UpdateCategory({ field, value }))
  }

  const handleSaveCategory = async () => {
    if (!category.title.trim() && !category.slug.trim() && category.groups.length === 0) {
      setCategoryError(true)
    } else if (category.groups[0].attributes.length === 0) {
      setAttributeError(true)
    } else {
      setAttributeError(false)
      setCategoryError(false)
      dispatch(saveCategory())
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 1000)
    }
  }

  return (
            <Content title='ایجاد دسته بندی'>

                    {/* dialog box */}
                    <Dialog maxWidth={'sm'} fullWidth={true} open={open} onClose={handleCloseDialog}>
                          <DialogTitle>افزودن گروه دسته بندی جدید</DialogTitle>
                          <DialogContent>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="groupTitle"
                              label="عنوان گروه جدید"
                              type="text"
                              fullWidth
                              variant="outlined"
                              onChange={(event : React.ChangeEvent<HTMLInputElement>) => setGroupTitle(event.currentTarget.value)}
                            />
                              {groupTitleError && <Box component="small" className={styles.titleError}>* عنوان را وارد کنید</Box> }
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseDialog}>بستن</Button>
                            <Button onClick={handleNewCategoryGroup}>تایید</Button>
                          </DialogActions>
                    </Dialog>

                    {/* category name and slug */}
                    <Box>
                        <FormControl fullWidth className={styles.input}>
                          <TextField onBlur={(event : React.FocusEvent<HTMLInputElement>) => updateCategory(event.currentTarget.name, event.currentTarget.value)} label='عنوان - فارسی' name="title" id="title" />
                        </FormControl>
                        <FormControl fullWidth className={styles.input}>
                          <TextField onBlur={(event : React.FocusEvent<HTMLInputElement>) => updateCategory(event.currentTarget.name, event.currentTarget.value)} label='اسلاگ - انگلیسی' name="slug" id="slug" />
                        </FormControl>
                    </Box>

                    {/* category groups */}
                    {category.groups.map((group : ICategoryGroup) => <CategoryGroup key={group.hash} {...group} />)}

                    <Divider className={styles.divider} />
                    {/* add new category group */}
                    <Box component="div">
                        <Button className={styles.dialog} onClick={handleShowDialog} variant='contained' startIcon={<Add className={styles.Add}/>} >ایجاد گروه دسته بندی</Button>
                    </Box>

                    {/* add new category */}
                    <Box component="div" className={styles.saveBox}>

                      {!status && (
                        <Button color='success' className={styles.dialog} onClick={handleSaveCategory} variant='contained' startIcon={<Save className={styles.Add} />} >ذخیره</Button>
                      )}
                      {status && (
                         <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                         <CircularProgress color="success" />
                       </Stack>
                      )}
                    </Box>
                    {attributeError && <Box component="div" className={styles.attributeError}>* برای گروه مورد نظر ویژگی ها را وارد کنید</Box>}
                    {categoryError && <Box component="div" className={styles.titleError}>* برای دسته بندی مورد نظر گروه ایجاد کنید و برای گروه ایجاد شده ویژگی اضافه کنید</Box>}
            </Content>
  )
}
