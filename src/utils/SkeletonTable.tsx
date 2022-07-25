import * as React from 'react'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import { Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    container: {
      width: '100% !important',
      display: 'flex',
      flexDirection: 'row'
    },
    grid: {
      margin: '8px 15px !important'
    },
    skeleton: {
      width: '100% !important',
      height: '40px !important'
    }
  })
)

function Media () {
  const styles = useStyles()

  return (
    <Grid className={styles.container}>
            <Grid item className={styles.grid} xs={12} sm={12} md={4} lg={3}>
                  <Skeleton className={styles.skeleton} />
            </Grid>

            <Grid item className={styles.grid} xs={12} sm={12} md={4} lg={3}>
                  <Skeleton className={styles.skeleton} />
            </Grid>

            <Grid item className={styles.grid} xs={12} sm={12} md={4} lg={3}>
                  <Skeleton className={styles.skeleton} />
            </Grid>

            <Grid item className={styles.grid} xs={12} sm={12} md={4} lg={3}>
                  <Skeleton className={styles.skeleton} />
            </Grid>

    </Grid>
  )
}

export default function SkeletonTable () {
  return (
      <>
          <Media />
          <Media />
          <Media />
          <Media />
      </>
  )
}
