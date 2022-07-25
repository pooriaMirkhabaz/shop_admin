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
  const categoryGroups = useSelector((state : IRootState) => state.category.groups)
  const [open, setOpen] = useState<boolean>(false)
  const [groupTitle, setGroupTitle] = useState<string>('')
  const [groupTitleError, setGroupTitleError] = useState<boolean>(false)

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
    dispatch(saveCategory())
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
                    {categoryGroups.map((group : ICategoryGroup) => <CategoryGroup key={group.hash} {...group} />)}

                    <Divider className={styles.divider} />
                    {/* add new category group */}
                    <Box component="div">
                        <Button className={styles.dialog} onClick={handleShowDialog} variant='contained' startIcon={<Add className={styles.Add}/>} >ایجاد گروه دسته بندی</Button>
                    </Box>

                    {/* add new category */}
                    <Box component="div" className={styles.saveBox}>
                        <Button color='success' className={styles.dialog} onClick={handleSaveCategory} variant='contained' startIcon={<Save className={styles.Add}/>} >ذخیره</Button>
                    </Box>

            </Content>
  )
}
