import React from 'react'
import Grid from '@mui/material/Grid';
import './Drawer.css'

function Drawer() {
  return (
    <div className='Drawer'>
        <div className='Container'>
        <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={3}
         >
            <Grid item xs>
            <button className='DashboardBtn'>Dashboard</button>
            </Grid>
            <Grid item xs>
            <button className='AddSale'>Add Sale</button>
            </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Drawer