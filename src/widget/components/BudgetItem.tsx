import React from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '../../utils'
import { useAppSelector } from '../../store'

const useStyles = makeStyles()((theme: Theme) => ({
  budgetItem: {
    backgroundColor: 'rgb(253, 253, 253)',
    borderColor: 'rgb(229, 238, 252)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    height: '20%',
    width: '94%',
    margin: '3% 3% 0% 3%',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}))

export const BudgetItem = ({ name, total }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.budgetItem}>
      <h4>{name}</h4>
      <h4>{total}</h4>
    </div>
  )
}