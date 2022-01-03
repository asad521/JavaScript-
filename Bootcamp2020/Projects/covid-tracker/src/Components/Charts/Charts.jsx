import React,{useEffect,useState} from "react";
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import { MenuItem, styled } from "@material-ui/core";
import { Chart, registerables } from 'chart.js';
import styles from './Charts.modules.css';

Chart.register(...registerables);
const Charts = ({countryData,country}) => {
    console.log(country)
    const [state,setState] = useState([]);
    useEffect(async ()=> {
        const data= await fetchDailyData();
        setState(data);
      },[] )

    //   console.log(state)
      
      const LineChart =  (
          state.length !==0 ? (<Line data= {{
            labels:state.map(({Date})=>Date),
            datasets:[{
                data:state.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:state.map(({deaths})=>deaths),
                label:'deaths',
                borderColor:'rgba(255,0,0,1)',
                backgroundColor:'rgba(255,0,0,0.6)',
                fill:true,
            }]
        }}>

        </Line>):(null)

      )

    //   console.log(countryData.deaths.value)

      const BarChart = (
        countryData.confirmed ? (<Bar data={{
            labels:['infected','recovered','deaths'],
            datasets:[{
                label:'people',
                backgroundColor:['rgba(255,0,0,0.7)','rgba(0,0,255,0.7)','rgba(0,0,255,0.7)'],
                data:[countryData.confirmed.value,countryData.recovered.value,countryData.deaths.value ]
            
            }]

        }} options={{legend:{display:false},
        // title:{display:true,text:`Current state in ${country}`}
        title:{display:true,text:`Current state in `}
        }}/>) : null)
    return (
        <div className='container'>
            {country ? (BarChart ):(LineChart)}
        {/* {BarChart} */}
        </div>
             

    )
}

Charts.propTypes = {

}

export default Charts
