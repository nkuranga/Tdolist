import React from 'react'
import {useState, useEffect} from "react"
import moment from 'moment/moment';
import {api} from "../utils/api"
import {TiWeatherPartlySunny} from "react-icons/ti"
import { BsSunset, BsSunrise} from "react-icons/bs"
import './style.css'
import Dialog from '../components/Dialog';
const Weather = () => {
  const [data, setData] = useState({});
    
    useEffect(() => {
      const getWeatherFromApiAsync = async () => {
        const resopnse = await fetch(api);
        const resopnseJson = await resopnse.json();
        console.log("json", resopnseJson);
        setData(resopnseJson);
      };
      getWeatherFromApiAsync();
    }, []);
    const sunrise= data?.sys?.sunrise
    const sunset= data?.sys?.sunset
    const x = moment.utc(sunrise * 1000).format('HH:mm a')
    const y = moment.utc(sunset * 1000).format('HH:mm a')
console.log(sunrise)
  return (
    <>
      <div className='weather-container'>
      <div className='temperature'>
          <TiWeatherPartlySunny size={30} className='weather-icon'/>
          <h3> {data?.main?.temp} <sup>0</sup>C</h3>
      </div>
      <div className='leftside-weather'>
          <h4><BsSunrise size={30} className='weather-icon'/></h4>
          <h4 className="weather-title"> {x}</h4>&nbsp;
          <h4><BsSunset size={30} className='weather-icon'/></h4>
          <h4 className='weather-title'> {y}</h4>
      </div>
    </div>
    <Dialog/>
    </>
    
  )
}

export default Weather