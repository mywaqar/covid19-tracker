import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';



export const fetchData = async (country) => {
    
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
}


export const fetchDailyData = async (country) => {

    try {
        const { data } = await axios.get(`${url}/daily`);

        let fData = []

        for (let index = data.length-60; index < data.length; index++) {
             fData = [...fData,data[index]]
        }

        const modifiedData = fData.map((arrayObj) => (
            {
                confirmed: arrayObj.confirmed.total,
                deaths: arrayObj.deaths.total,
                date: arrayObj.reportDate,
            }));

        return modifiedData

    } catch (error) {
        return error;
    }
}

export const fetchCountries = async() => {

    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }


}