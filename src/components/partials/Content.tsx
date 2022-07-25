import React from 'react'
import { Divider, Paper, StepContentProps, Theme, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { Box } from '@mui/system'

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    title: {
      marginBottom: theme.spacing(2)
    },
    divider: {
      marginBottom: theme.spacing(2)
    },
    children: {
      marginTop: theme.spacing(2)
    }
  })
)

const Content = ({ title, children } : React.PropsWithChildren<StepContentProps>) => {
  const styles = useStyles()

  return (
        <Paper className='contentSection'>
<Box component="div" className="content" >
                            <Typography className={styles.title} >{title}</Typography>
                            <Divider className={styles.divider}/>

                            <Box component="div" className={styles.children}>
                              {children}
                            </Box>
                            </Box>

        </Paper>
  )
}

export default Content
