import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
                    <div className="float-left Inline">
                        <WeatherIcon code={props.data.icon} size={52}/>
                    </div>
                    <WeatherTemperature celsius={props.data.temperature} />
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