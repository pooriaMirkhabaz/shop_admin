/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Content from '../partials/Content'
import Http from '../../services/Http'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SkeletonTable from '../../utils/SkeletonTable'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#44148c',
    color: theme.palette.common.white,
    textAlign: 'right !important'
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default function Category () {
interface CategoryItem {
  title : string;
  slug : string
}

const [categories, setCategories] = React.useState<CategoryItem[]>([])
const [isLoading, setIsLoading] = React.useState<boolean>(true)

React.useEffect(() => {
  const httpHandler = new Http()
  httpHandler.get('/api/v1/category', {
    params: {
      fields: 'title,slug'
    }
  }).then(result => {
    setCategories(result.data.data)
    setIsLoading(false)
  })
}, [isLoading])

return (
    <Content title="لیست دسته بندی ها">
    {isLoading && <SkeletonTable />}
    {!isLoading &&
    (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>عنوان</StyledTableCell>
            <StyledTableCell align="right">اسلاگ</StyledTableCell>
            <StyledTableCell align="right">ویرایش</StyledTableCell>
            <StyledTableCell align="right">حذف</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row : any, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.slug}</StyledTableCell>
              <StyledTableCell align="right"><Button><BorderColorIcon /></Button></StyledTableCell>
              <StyledTableCell align="right"><Button><DeleteIcon color='secondary' /></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )}

    </Content>
)
}
