import React from 'react';
import Grid from '@mui/material/Grid';
import { data } from './data/data';
import { Paper, Typography } from '@mui/material';

import { useStyles } from './DashboardMui';
import "./Dashboard.css"
// import { Line } from 'react-chartjs-2';

const Dashboard = () => {
    const classes = useStyles();

    // const Graphdata = {
    //     labels: [
    //     "Ambient",
    //     "Fresh",
    //     "Frozen",
    //     "Fruit&Veg"
    //     ],
    //     datasets: [
    //       {
    //         label: "",
    //         backgroundColor: "#D9D9D9",
    //         borderColor: "#D9D9D9",
    //         hoverBackgroundColor: "#D9D9D9",
    //         hoverBorderColor: "#D9D9D9",
    //         data: [158, 105, 78, 360],
    //         barPercentage: 0.75,
    //         categoryPercentage: 0.5
    //       },
    //     ]
    //   };
      
      const options = {
        maintainAspectRatio: false,
        cornerRadius: 2,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              stacked: false,
              ticks: {
                stepSize: 20
              }
            }
          ],
          xAxes: [
            {
              stacked: false,
              gridLines: {
                color: "transparent"
              }
            }
          ]
        }
      };
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
                    <Paper className={classes.graph}>
                        <Typography className={classes.graphHeader}>
                            Total Sales by category
                        </Typography>
                        {/* <Line Graphdata={Graphdata} options={options} /> */}
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                        spacing={3}>
                        <Grid item xs={3} style={{ position: "center" }}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.headerTwo}>
                                    Total Sales this month
                                </Typography>
                                <Typography className={classes.bodytwo}>
                                    120
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper1}>
                                <Typography className={classes.header3}>
                                    Total Sales this month
                                </Typography>
                                <Typography className={classes.body3}>
                                    Fresh
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper2}>
                                <Typography className={classes.header4}>
                                    Total Sales this month
                                </Typography>
                                <Typography className={classes.body4}>
                                    Name One
                                </Typography>
                            </Paper>
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
                            <Paper className={classes.monthly}>
                                <Typography className={classes.monthHeader}>Monthly Sales</Typography>
                                {data?.map((item) => (
                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Grid item xs={6} >
                                            <Typography className={classes.date}>
                                                {item?.date}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Typography className={classes.sale}>
                                                {item?.sale}
                                            </Typography>
                                        </Grid>
                                    </Grid>))}
                            </Paper>
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
                            <Grid container direction="column" spacing={2}>
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