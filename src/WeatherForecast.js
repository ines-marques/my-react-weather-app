import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let apiKey = "178be0a79146aa22863d056738d4f9b4";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecastDay">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="">
                        <span className="WeatherForecastTemperatureMax">19</span>
                        <span className="WeatherForecastTemperatureMin">10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}