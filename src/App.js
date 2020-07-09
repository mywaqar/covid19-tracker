import React from 'react'

import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'

import styles from './App.module.css'

import { fetchData, fetchCountries } from './api/index'


class App extends React.Component {


    state = {
        data: {},
        country:'',
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        console.log (fetchedData)
        this.setState({ data: fetchedData })
    }

    handlecountrychange = async  (country) => {
        const fetchedData = await fetchData(country)
        console.log (fetchedData)
        this.setState({data: fetchedData, country: country})

    }

    render() {

        const { data, country } = this.state

        return (

            <div className={styles.container}>
                <Cards apidata = {data}/>
                <CountryPicker handlecountrychange = {this.handlecountrychange}></CountryPicker>
                <Chart apidata = {data} country = {country}></Chart>
            </div>
        )
    }
}

export default App;
