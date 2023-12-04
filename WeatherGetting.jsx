import React, { useState } from 'react'
import './Weather.css'


const WeatherGetting = () => {
  const [city, setcity] = useState('Delhi');
  const [weatherInfo , setweatherInfo] = useState('');

    function getWeather(){
      const apiKey = '281e4985db7cfd19df515cfc6dd1a3bb';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(url)
      .then((response) => response.json())
      .then((data) => {

        let Mt = Math.round(data.main.temp);
        let Fl = Math.round(data.main.feels_like);
        
        const weather = {
          location : `${data.name}`,
          temperature : `${Mt}`,
          feels_like : `${Fl}`,
          Wind : `${data.wind.speed}`,
          condition : `${data.weather[0].description}`
        }
        setweatherInfo(weather)
      })
    }
  
  return (
    <>
    <div>
      <div className='container-fluid'>
        <div className="first-container">
          <div className="input-holder">
            <input type='text' placeholder='City'  value={city} onChange={(e) => setcity(e.target.value)}
            style={{width : '250px',background : 'linear-gradient(90deg, #1CB5E0 0%, #4361ee 100%)'}}></input>
            <button className='js-submit btn btn-primary' onClick={getWeather} >Submit</button>

            <div className="weather-container">
              <p><i className="bi bi-geo-alt-fill"></i>{city}</p>
              <div className="js-temp">
              <p>{weatherInfo.temperature} <sup><i className="bi bi-circle js-text"></i></sup> C</p>
              <p><i className="bi bi-cloud js-text"></i> </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className='second-container'>
        </div>
        
      </div>
      
    </div>  
    <div className="other-thing">
        <div className="js-humidity temp">
        <i className="bi bi-thermometer-half"></i>
        {weatherInfo.condition} 
        </div>
        <div className='js-wind temp'>
        <i className="bi bi-wind"></i>
        {weatherInfo.Wind}km
        </div>
        <div className='js-wind temp'>
        <i className="bi bi-cloud-fill" style={{padding : '10px'}}></i>
        {weatherInfo.feels_like}
        </div>
        
    </div>
    </>
  )
}

export default WeatherGetting
