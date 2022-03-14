import { ProfitLossWidget } from '../../widget'
import React from 'react'
import { makeStyles } from '../../utils'

const useStyles = makeStyles()((theme) => ({
  main: {
    backgroundColor: 'rgb(254, 249, 245)',
    display: 'flex',
    height: '100vh',
    width: '100vw',
    paddingTop: '5vh',
    paddingLeft: '20vw',
    paddingRight: '20vw',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
}))

export const App = () => {
  const { classes } = useStyles()
  return (
    <>
      <div className={classes.main}>
        <ProfitLossWidget />
      </div>
    </>
  )
}
