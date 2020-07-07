import React from 'react'

import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'

import styles from './App.module.css'

import { fetchData } from './api/index'


class App extends React.Component {


    state = {
        data: {},
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        console.log (fetchedData)
        this.setState({ data: fetchedData })
    }

    render() {

        const { data } = this.state

        return (

            <div className={styles.container}>
                <Cards apidata = {data}/>
                <CountryPicker></CountryPicker>
                <Chart></Chart>
            </div>
        )
    }
}

export default App;
