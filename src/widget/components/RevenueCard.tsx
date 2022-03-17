import { BudgetItem } from '../'
import { Divider } from '@mui/material'
import { HelpOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Theme } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { makeStyles } from '../../utils'
import { rawNumbertoDollar } from '../../utils'
import { v4 as uuidv4 } from 'uuid'

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
    zIndex: 10,
    // marginRight: '-16%',
  },
  budgetItem: {
    backgroundColor: 'rgb(253, 253, 253)',
    borderColor: 'rgb(251, 237, 238)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    height: '21%',
    width: '94%',
    margin: '3% 3% 0% 3%',
    color: 'black',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '6px 7px',
    '&:nth-of-type(1)': {
      borderColor: 'rgb(229, 238, 252)',
    },
    '&:nth-last-of-type(1)': {
      marginBottom: 'auto',
    },
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
  },
  totalBalance: {
    height: '25%',
    width: '100%',
    backgroundColor: 'rgb(235, 127, 47)',
    borderRadius: '10px',
    justifySelf: 'flex-end',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  balanceLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22%',
    height: '100%',
    backgroundColor: 'rgb(220, 115, 44)',
    borderRadius: '10px',
  },
  balanceRight: {
    height: '100%',
    width: 'auto',
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '13px 8px',
  },
  balanceTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTitle: {
    marginTop: '0%',
    marginBottom: '0%',
  },
  balanceAmount: {
    marginTop: 'auto',
    marginBottom: '0%',
    justifySelf: 'flex-end',
  },
  divider: {
    background: 'rgb(247, 218, 195)',
    borderColor: 'rgb(247, 218, 195)',
    height: '1px', 
    width: '90%', 
    alignSelf: 'center', 
    justifySelf: 'center',
    marginTop: 'auto',
  },
  // helpTooltip: {
  //   backgroundColor: 'rgb(255, 255, 255)',
  //   // color: 'rgb(166, 177, 203)',
  // },
}))

export const RevenueCard = ({ salesTotal, refundTotal, expenseTotal, totalProceeds }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.revenueCard} key={uuidv4()}>
      {
        [ ['Sales', salesTotal], ['Refunds', refundTotal], ['Expenses', expenseTotal] ].map(heading => {
          return (
            <div className={classes.budgetItem}>
              <div className={classes.budgetItemTopRow}>
                <h4 className={classes.itemName}>{heading[0]}</h4>
                <Tooltip 
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(171, 182, 206)',
                        fontSize: '.8em',
                        fontWeight: '700',
                        borderWidth: '2px',
                        borderColor: 'rgb(246, 247, 250)',
                        borderStyle: 'solid',
                        height: '6vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .MuiTooltip-arrow': {
                          backgroundColor: 'rgb(255, 255, 255)',
                        },
                      }
                    },
                    // arrow: {
                    //   color: 'rgb(171, 182, 206)',
                    //   // '&::before': {
                    //   //   borderWidth: '2px',
                    //   //   borderColor: 'rgb(246, 247, 250)',
                    //   //   borderStyle: 'solid',
                    //   // }
                    // },
                  }}
                  title='This is a tooltip example.' 
                  placement='right' 
                  arrow
                >
                  <IconButton sx={{ color: 'rgb(236, 143, 73)', fontSize: '1em' }}>
                    <HelpOutline sx={{ fontSize: '1em' }} />
                  </IconButton>
                </Tooltip>
              </div>
              <h4 className={classes.itemAmount} style={{ color: heading[1] > 0 ? 'rgb(80, 150, 250)' : 'rgb(231, 71, 82)' }}>{rawNumbertoDollar.format(heading[1])}</h4>
            </div>
          )
        })
      }
      <Divider className={classes.divider} flexItem={true} />
      <div className={classes.totalBalance}>
        <div className={classes.balanceLeft}>=</div>
        <div className={classes.balanceRight}>
          <div className={classes.balanceTop}>
            <h4 className={classes.balanceTitle}>Net Proceeds</h4>
            <IconButton sx={{ color: 'rgb(255, 255, 255)', fontSize: '1em' }}>
              <HelpOutline sx={{ fontSize: '1em' }} />
            </IconButton>
          </div>
          <h4 className={classes.balanceAmount}>{rawNumbertoDollar.format(totalProceeds)}</h4>
        </div>
      </div>
    </div>
  )
}