import { ControlCamera as ControlCameraIcon, MoreHoriz } from '@mui/icons-material'

import { IconButton } from '@mui/material'
import React from 'react'
import { RevenueCard } from '../'
import { SankeyDiagram } from '../'
import { Theme } from '@mui/material'
import { makeStyles } from '../../utils'

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
    justifySelf: 'flex-end',
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
    height: '70%',
    // marginLeft: '-25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    justifySelf: 'flex-end',
    marginLeft: 'auto',
  },
  lineItem: {
    backgroundColor: 'rgb(254, 249, 245)',
    color: 'rgb(33, 49, 87)',
    width: '20vw',
    height: '3.5vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '.5vw',
    borderRadius: '5px',
    width: '0',
    minWidth: '100%',
    '&:hover': {
      backgroundColor: 'rgb(235, 127, 47)',
      color: 'rgb(255, 255, 255)',
      cursor: 'pointer',
    }
  },
}))

export const ProfitLossWidget = ({ lineItemData }) => {
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
            <IconButton sx={{ color: 'gray' }} >
              <MoreHoriz />
            </IconButton>
          </div>
        </div>
        <div className={classes.sankeyContainer}>
          <RevenueCard />
          <SankeyDiagram />
          <div className={classes.lineItems}>
            {lineItemData && lineItemData.links.map(item => (
              <div className={classes.lineItem}>
                <h5 className={classes.lineItemTitle}>{item.target}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}