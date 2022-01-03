
import React,{useEffect,useState} from "react";
import {Cards, Charts, Country} from "./Components";
import styles from './App.module.css';
import { fetchData } from './api';    
import axios from 'axios';
import {fetchDailyData} from './api';
import covid from './images/covid.png'
function App() {  

  const [state,setState] = useState({data:{},
  country:''});
  useEffect(async ()=> {
    const data= await fetchData();
    setState({...state, data:data})
  },[] )

const handelChange = async (country) => {
const data= await fetchData(country);
console.log(country)
setState({...state, data:data ,
          country:country})
}


console.log(state.data +"sate")
  return (
    <div className={styles.container}>
      <img src={covid} />
        <Cards data={state.data} />
        <Country handelChange={handelChange}/>
        <Charts countryData={state.data} country={state.country} />
    </div>
  );
}

export default App;
