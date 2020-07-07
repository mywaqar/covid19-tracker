import React , {useState, useEffect} from 'react'
import {NativeSelect, FormControl } from '@material-ui/core'
import {fetchCountries} from '../api/index'
import styles from './CountryPicker.module.css'


const CountryPicker = () => {

    const [countries, setCountries] = useState([])

    useEffect(()=> {

        const fetchAPI = async() => {
            setCountries(await fetchCountries())
        } 

        fetchAPI()

    },[setCountries])


    return(
        <FormControl className = {styles.formControl}>
            <NativeSelect>
                <option value = "Global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;