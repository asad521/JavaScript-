import React,{useEffect,useState} from "react";
import { NativeSelect,FormControl } from '@material-ui/core'
import {fetchCountryData} from '../../api';
import styles from './Country.modules.css';
const Country = ({handelChange}) => {

    const [state,setState] = useState([]);
    useEffect(async ()=> {
        const data= await fetchCountryData();
        setState(data);
      },[] )

    return (
        <FormControl>
            <NativeSelect className="form" defaultValue="" onChange={e=>handelChange(e.target.value)}>
                <option value="" defaultValue="">Global</option>
                {state.map((country,index) =>(<option key={index}value={country}>{country}</option>
))}
            </NativeSelect>
        </FormControl>
    )
}

Country.propTypes = {

}

export default Country
