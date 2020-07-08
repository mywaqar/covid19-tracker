import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../api/index'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = () => {


    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());    
        }

     //   console.log("From Effect", dailyData)

        fetchAPI();
    });

    const lineChart = (
        dailyData.length > 0
        ? (
        <Line 
         data = {{
                labels: dailyData.map(({ date })=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true,
                }, {
                    data: dailyData.map(({deaths}) => deaths ),
                    label: 'deaths',
                    borderColor: 'rgba(255,0,0,0.5)',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill:true,
                }]
            }
        } 
        />):null
    )

    return (


        <div className = {styles.container}>
            <div><h1> Past 2 months Data</h1></div>
            {lineChart}
        </div>
    )
}

export default Chart;