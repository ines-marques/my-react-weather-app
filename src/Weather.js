import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon  
        });
    }

    function search() {
        const apiKey = "178be0a79146aa22863d056738d4f9b4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <WeatherInfo data={weatherData} />
                <form onSubmit={handleSubmit} className="MyForm">
                    <div className="row">
                        <div className="col-10">
                            <input type="search" placeholder="Enter a city" className="form-control" autofocus="on" onChange={handleCityChange}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}                                            

