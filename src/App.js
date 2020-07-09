import React from 'react'

import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'

import styles from './App.module.css'

import { fetchData } from './api/index'
import images from './images/covid19.jpg'



class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        console.log(fetchedData)
        this.setState({ data: fetchedData })
    }

    handlecountrychange = async (country) => {

        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render() {

        const { data, country } = this.state

        return (

            <div className={styles.container}>
                <img src={images} className={styles.images} alt="Covid-19" />
                <Cards apidata={data} />
                <CountryPicker handlecountrychange={this.handlecountrychange}></CountryPicker>
                <Chart apidata={data} country={country}></Chart>
                <p>Github: https://github.com/mywaqar<br/>Surge Url: http://covid19_tracker_mywaqar.surge.sh/</p>
            </div>
        )
    }
}

export default App;
