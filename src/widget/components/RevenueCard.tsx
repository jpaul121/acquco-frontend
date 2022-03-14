import { BudgetItem } from '../'
import { HelpOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '../../utils'
import { rawNumbertoDollar } from '../../utils'

const useStyles = makeStyles()((theme: Theme) => ({
  revenueCard: {
    backgroundColor: 'rgb(254, 249, 245)',
    borderColor: 'rgb(250, 233, 219)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '55%',
    width: '23%',
    // marginTop: '20%',
  },
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
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '4px 6px',
  },
  itemName: {
    marginTop: '0%',
    marginBottom: '0%',
  },
  itemAmount: {
    marginBottom: '0%',
    justifySelf: 'flex-end',
    marginTop: 'auto',
  },
  budgetItemTopRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}))

export const RevenueCard = ({ salesTotal }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.revenueCard}>
      <div className={classes.budgetItem}>
        <div className={classes.budgetItemTopRow}>
          <h4 className={classes.itemName}>Sales</h4>
          <IconButton sx={{ color: 'gray', fontSize: '1em' }} >
            <HelpOutline sx={{ fontSize: '1em' }} />
          </IconButton>
        </div>
        <h4 className={classes.itemAmount}>{rawNumbertoDollar.format(salesTotal)}</h4>
      </div>
    </div>
  )
}