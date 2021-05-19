import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    function fahrenheit () {
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius") {
        return (
        <div className="WeatherTemperature Inline">
            <span className="Temperature Inline">{Math.round(props.celsius)}</span>
            <span className="Unit Inline">ºC | <a href="/" onClick={showFahrenheit}> ºF</a></span>
        </div>
        );
    } else {
        return (
        <div className="WeatherTemperature Inline">
            <span className="Temperature Inline">{Math.round(fahrenheit())}</span>
            <span className="Unit Inline"><a href="/" onClick={showCelsius}>ºC</a>{" "}| ºF</span>
        </div>
        );
    }
    
}