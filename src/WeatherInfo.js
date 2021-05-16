import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" width="62"/>
                    <span className="Temperature">{Math.round(props.data.temperature)}</span>
                    <span>ºC</span>
                    <span>ºF</span>
                    <ul className="List">
                        <li>Humidity: {props.data.humidity}<span></span>%</li>
                        <li>Wind: {Math.round(props.data.wind)}<span></span>km/h</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="List Right">
                        <li>{props.data.city}</li>
                        <li><FormattedDate date={props.data.date} /></li>
                        <li className="Capitalize">{props.data.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}