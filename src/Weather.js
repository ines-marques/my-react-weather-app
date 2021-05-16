import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
           temperature: response.data.main.temp,
           wind: response.data.wind.speed,
           humidity: response.data.main.humidity,
           description: response.data.weather[0].description,
           city: response.data.name,
           iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
           date: "Friday 15:24"
        });        
    }

    function search() {
        const apiKey = "178be0a79146aa22863d056738d4f9b4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        weatherData.ready(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} width="62"/>
                        <span className="Temperature">{Math.round(weatherData.temperature)}</span>
                        <span>ºC</span>
                        <span>ºF</span>
                        <ul className="List">
                            <li>Humidity: {weatherData.humidity}<span></span>%</li>
                            <li>Wind: {Math.round(weatherData.wind)}<span></span>km/h</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="List Right">
                            <li>{weatherData.city}</li>
                            <li>{weatherData.date}</li>
                            <li className="Capitalize">{weatherData.description}</li>
                        </ul>
                    </div>
                </div>
                <form className="MyForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-10">
                            <input type="search" placeholder="Enter a city" className="form-control" autofocus="on" onChange={handleCityChange}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    } else {
        search();
        return "Loading..."
    }
}                                            

