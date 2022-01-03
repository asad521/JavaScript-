import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {Line, Bar } from 'react-chartjs-2';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  console.log('in fetch data')
  console.log(country)
  let countryUrl = url;
if(country){
  console.log('if condition true')
  countryUrl=`${url}/countries/${country}`
}
  try {
    const {data:{confirmed,deaths,recovered,lastUpdate}}= await axios.get(countryUrl);
    const data = {
      confirmed,
      deaths,
      recovered,
      lastUpdate
    }
    
    // console.log(data)
    return data
  } catch (error) {}
};


export const fetchDailyData = async () => {

  try {
    const {data}= await axios.get(`${url}/daily`);
    //get required values fromd ata
    const cleanData= data.map(item => ({
      confirmed:item.confirmed.total,
      deaths:item.deaths.total,
      Date:item.reportDate,
    }))
    return cleanData
  } catch (error) {}
};


export const fetchCountryData = async () => {
  try {
    const {data:{countries}}= await axios.get(`${url}/countries`);
    //get required values per country
    return countries.map(item => item.name)
  } catch (error) {}
};