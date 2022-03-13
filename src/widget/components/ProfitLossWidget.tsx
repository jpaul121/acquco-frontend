import React from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '../../utils'

const useStyles = makeStyles()((theme: Theme) => ({
  profitLossWidget: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(246, 247, 250)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    height: '90vh',
    width: '80vw',
  },
}))

export const ProfitLossWidget = () => {
  const { classes } = useStyles()
  return (
    <>
      <div className={classes.profitLossWidget}>

      </div>
    </>
  )
}