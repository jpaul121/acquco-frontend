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
    borderColor: 'rgb(251, 237, 238)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '55%',
    width: '23%',
  },
  budgetItem: {
    backgroundColor: 'rgb(253, 253, 253)',
    borderColor: 'rgb(251, 237, 238)',
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
    padding: '5px 6px',
    '&:nth-of-type(1)': {
      borderColor: 'rgb(229, 238, 252)',
    }
  },
  itemName: {
    marginTop: '0%',
    marginBottom: '0%',
    color: 'rgb(171, 182, 206)',
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

export const RevenueCard = ({ salesTotal, refundTotal, expenseTotal }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.revenueCard}>
      {
        [ ['Sales', salesTotal], ['Refunds', refundTotal], ['Expenses', expenseTotal] ].map(heading => {
          return (
            <div className={classes.budgetItem}>
              <div className={classes.budgetItemTopRow}>
                <h4 className={classes.itemName}>{heading[0]}</h4>
                <IconButton sx={{ color: 'rgb(236, 143, 73)', fontSize: '1em' }}>
                  <HelpOutline sx={{ fontSize: '1em' }} />
                </IconButton>
              </div>
              <h4 className={classes.itemAmount} style={{ color: heading[1] > 0 ? 'rgb(80, 150, 250)' : 'rgb(231, 71, 82)' }}>{rawNumbertoDollar.format(heading[1])}</h4>
            </div>
          )
        })
      }
    </div>
  )
}