import React from 'react'

import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'

import styles from './App.module.css'

import { fetchdata } from './api/index'

class App extends React.Component {

   async componentDidMount (){

        const data = await fetchdata();
        console.log (data)
    }

    render() {

        return (

            <div className={styles.container}>
                <Cards/>
                <Chart></Chart>
                <CountryPicker></CountryPicker>
            </div>
        )
    }
}

export default App;
