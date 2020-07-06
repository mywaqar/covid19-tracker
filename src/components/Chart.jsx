import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../api/index'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = () => {

    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData()
            setDailyData(dailyData)
        }
        fetchAPI();
    })

    const lineChart = (
        <Line
        data={
            {
                lables: '',
                datasets: [{},{}]
            }
        } 
        
        >


        </Line>

    )




    return (

        <div>
            <h1>Chart</h1>
        </div>
    )
}

export default Chart;