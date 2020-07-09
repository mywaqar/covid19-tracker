import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../api/index'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'


const Chart = ({ apidata: { confirmed, recovered, deaths }, country }) => {


    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length > 0
            ? (
                <Line
                    data={
                        {
                            labels: dailyData.map(({ date }) => date),
                            datasets: [{
                                data: dailyData.map(({ confirmed }) => confirmed),
                                label: 'Infected',
                                borderColor: '#3333ff',
                                fill: true,
                            },
                            {
                                data: dailyData.map(({ deaths }) => deaths),
                                label: 'deaths',
                                borderColor: 'rgba(255,0,0,0.5)',
                                backgroundColor: 'rgba(255,0,0,0.5)',
                                fill: true,
                            }]
                        }
                    }
                    options={
                        {
                            title: { display: true, fontSize: 18, fontColor: 'rgba(255,0,0,0.5)', text: `Daily Data for past 2 months` }
                        }
                    }
                />) : null
    )

    const barChart = (
        confirmed
            ?
            (
                <Bar data={
                    {
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            data: [confirmed.value, recovered.value, deaths.value],
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, .5)', 'rgba(8, 44, 5, 0.7)', 'rgba(255, 0, 0, .5)']
                        }]
                    }
                }
                    options={
                        {
                            legend: { display: false },
                            title: { display: true, fontSize: 18, fontColor: 'rgba(0,0,255,0.5)', text: `Current State in ${country}`}
                        }
                    }

                />
            ) : null
    )

    return (


        <div className={styles.container}>

            {country ? barChart : lineChart}

        </div>
    )
}

export default Chart;