import { ControlCamera as ControlCameraIcon, MoreHoriz } from '@mui/icons-material'

import { IconButton } from '@mui/material'
import React from 'react'
import { RevenueCard } from '../'
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
}))

export const ProfitLossWidget = () => {
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
        </div>
      </div>
    </>
  )
}