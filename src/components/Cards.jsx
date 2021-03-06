import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

const Cards = ({apidata:{confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return 'Loading...'
    }
    
    return (

        <div className={styles.container}>
            <Grid container spacing={4} justify='center'>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.Card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" >Infected</Typography>
                        <Typography variant="h5"><CountUp start ={0} end={confirmed.value} duation={2.5} separator = ","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Infected cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.Card, styles.recovered)}>
                    <CardContent>
                        <Typography  color="textSecondary">Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} period={2.5} separator = ","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of recoveries from cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.Card, styles.deaths)}>
                    <CardContent>
                        <Typography  color="textSecondary">Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} period={2.5} separator =","/> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.Card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary">Active Cases</Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value-(recovered.value+deaths.value)} period={2.5} separator =","/> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;