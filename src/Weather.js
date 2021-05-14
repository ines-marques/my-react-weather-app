import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

//DATA!

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name,
        })
    }

    function search() {
        const apiKey = "178be0a79146aa22863d056738d4f9b4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=porto&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    return (
        <div className="Weather">
            <div className="row">
                <div className="col-6">
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" width="62"/>
                    <span>16</span>
                    <span>ºC</span>
                    <span>ºF</span>
                    <ul className="List">
                        <li>Precipitation: {" "}<span></span>%</li>
                        <li>Wind: {" "}<span></span>km/h</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="List Right">
                        <li>City</li>
                        <li>Date</li>
                        <li>Description</li>
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
    )
}                                            

