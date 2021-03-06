import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../api/index'
import styles from './CountryPicker.module.css'


const CountryPicker = ({ handlecountrychange }) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }

        fetchAPI()

    }, [setCountries])
    console.log(countries)


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handlecountrychange(e.target.value)}>
                <option value=''>Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;