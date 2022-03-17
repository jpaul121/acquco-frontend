import { ControlCamera as ControlCameraIcon, MoreHoriz } from '@mui/icons-material'
import React, { useState } from 'react'
import { makeStyles, rawNumbertoDollar } from '../../utils'

import { IconButton } from '@mui/material'
import { RevenueCard } from '../'
import { SankeyDiagram } from '../'
import { Theme } from '@mui/material'
import { cx } from '@emotion/css'

const useStyles = makeStyles()((theme: Theme) => ({
  profitLossWidget: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(246, 247, 250)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    color: 'rgb(246, 247, 250)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: '90vh',
    width: '80vw',
    paddingLeft: '4%',
    paddingRight: '4%',
    zIndex: '1',
  },
  sankeyContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '1',
  },
  toolbarButtons: {
    justifySelf: 'flex-start',
    marginLeft: 'auto',
  },
  widgetToolbar: {
    alignItems: 'center',
    display: 'flex',
    paddingTop: '2vh',
  },
  widgetTitle: {
    color: 'rgb(33, 49, 87)',
    fontWeight: '700',
  },
  lineItems: {
    zIndex: 10,
    width: '40%',
    // marginLeft: '-25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    justifySelf: 'flex-start',
    marginLeft: 'auto',
    height: '100%',
  },
  revenueData: {
    width: '100%',
    justifySelf: 'start-end',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  expenseData: {
    width: '100%',
    justifySelf: 'start-end',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  lineItem: {
    backgroundColor: 'rgb(254, 249, 245)',
    color: 'rgb(33, 49, 87)',
    width: '20vw',
    height: '3.5vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 .5vw',
    borderRadius: '5px',
    width: '0',
    minWidth: '100%',
    '&:nth-of-type(2)': {
      '&:hover': {
        color: 'rgb(255, 255, 255)',
      },
    },
    '&:hover': {
      backgroundColor: 'rgb(235, 127, 47)',
      color: 'rgb(255, 255, 255) !important' as any,
      cursor: 'pointer',
      '&:nth-of-type(2)': {
        color: 'rgb(255, 255, 255)',
      },
    }
  },
  lineItemValue: {
    justifySelf: 'flex-end',
    marginLeft: 'auto',
    '&:hover': {
      color: 'rgb(255, 255, 255) !important',
    },
  },
  // 'lineItemValue:hover h4': {
  //   color: 'rgb(255, 255, 255) !important',
  // },
  revenue: {
    color: 'rgb(80, 150, 250)',
    // '&:hover': {
    //   color: 'rgb(255, 255, 255) !important',
    // },
  },
  expense: {
    color: 'rgb(231, 71, 82)',
    // '&:hover': {
    //   color: 'rgb(255, 255, 255) !important',
    // },
  },
  '$lineItemValue *': {
    '&:hover': {
      color: 'white',
    },
  },
  sandwichMenu: {
    position: 'absolute',
    right: '0',
    top: '100%',
    height: '16vh',
    width: '10vw',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(246, 247, 250)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    zIndex: '20',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  menuItem: {
    color: 'rgb(47, 62, 97)',
    marginTop: '0',
    marginBottom: '0',
  },
}))

export const ProfitLossWidget = ({ expenseData, revenueData }) => {
  
  const [ menuOpen, toggleMenu ] = useState(false)
  
  const { classes } = useStyles()
  
  return (
    <>
      <div className={classes.profitLossWidget}>
        <div className={classes.widgetToolbar}>
          <h2 className={classes.widgetTitle}>P&L Widget</h2>
          <div className={classes.toolbarButtons}>
            <IconButton sx={{ color: 'gray' }} >
              <ControlCameraIcon  />
            </IconButton>
            <IconButton sx={{ color: 'gray', position: 'relative' }} >
              <MoreHoriz onClick={() => toggleMenu(!menuOpen)} />
              {
                menuOpen &&
                <div className={classes.sandwichMenu}>
                  <h6 className={classes.menuItem}>Edit</h6>
                  <h6 className={classes.menuItem}>Delete</h6>
                  <h6 className={classes.menuItem}>Export CSV</h6>
                </div>
              }

            </IconButton>
          </div>
        </div>
        <div className={classes.sankeyContainer}>
          <RevenueCard />
          <SankeyDiagram />
          <div className={classes.lineItems}>
            <div className={classes.revenueData}>
              {revenueData && revenueData.map((item, i) => {
              const offsets = [ '20%', '19%', '6%', '1%' ]
              return (
                <div className={classes.lineItem} style={{ marginTop: `${offsets[i]}` }}>
                  <h5 className={classes.lineItemTitle}>{item.target}</h5>
                  <h5 className={cx(classes.lineItemValue, classes.revenue)}>{rawNumbertoDollar.format(item.value)}</h5>
                </div>
              )})}
            </div>
            <div className={classes.expenseData}>
            {expenseData && expenseData.map((item, i) => {
              const offsets = [ '14%', '1%', '1%', '0%', '1%', '2%' ]
              return (
                <div className={classes.lineItem} style={{ marginTop: `${offsets[i]}` }}>
                  <h5 className={classes.lineItemTitle}>{item.target}</h5>
                  <h5 className={cx(classes.lineItemValue, classes.expense)}>{rawNumbertoDollar.format(item.value)}</h5>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}