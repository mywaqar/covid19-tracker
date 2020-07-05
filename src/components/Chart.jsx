import React , {useState, useEffect} from 'react'
import {  } from "module";

import {Line, Bar} from 'react-chartjs-2'

import {fetchDailyData} from './api/index'

const Chart = () => {

    const  [dailyData, setDailyData] = useState({});
    
    useEffect(()=> {
        const fetchAPI = async ()=> {

            setDailyData( await fetchDailyData());
        }
        fetchAPI();
    })


    return (

        <div>
            <h1>Chart</h1>
        </div>
    )
}

export default Chart;