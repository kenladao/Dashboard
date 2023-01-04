import React from 'react';
import Grid from '@mui/material/Grid';
import {data} from './data/data';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={1}
            >
                <Grid item xs={4}>
                    <div className="graph">
                        <span className="one">
                        Total Sales by category
                        </span>
                    </div>
                </Grid>
                <Grid item xs={8}>
                <Grid  container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={3}>
                <Grid item xs={3} style={{position: "center"}}>
                    <div className='month'>
                        <div className='two'>
                            Total Sales this month
                        </div>
                        <di className='three'>
                            120
                        </di>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='fresh'>
                    Fresh
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className='nameOne'>
                    Name One
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className='bestSeller'>
                    best selling product
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className='totalMargin'>
                    total Margin
                    </div>
                </Grid>
                        <Grid item xs={2}>
                            <div className='monthly'>
                                <span className='monthlySale'>Monthly Sales</span>
                            {data?.map((item) => (
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Grid item xs={6} >
                                        <span className="date">
                                        {item?.date}
                                        </span>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <span className="sale">
                                        {item?.sale}
                                        </span>
                                    </Grid>
                                </Grid>))}
                            </div>
                        </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={10}>
                            <div className='sales'>
                                Sales Person per this month
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid container  direction="column" spacing={2}>
                                <Grid item xs={2}>
                                    <div className='mostSale'>
                                        Sales Person per this month
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className='totalSale'>
                                        totalSale
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>);
};
export default Dashboard;