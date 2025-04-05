import React, { useState } from "react"
import './Weather.css';
import Weather from "./Weatherapi";


function WeatherApp() {
    const [input, setInput] = useState('')
    const [weather, setWeather] = useState(null)


    const handleweather = async (city) => {
        const response = await Weather(city);
        setWeather(response);
    }

    return (
        <div className="app">
            <h1 className="title">Weather Update</h1>
            <div className="search-container">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    className="input"
                    type="text"
                    placeholder="Enter city name..."
                />
                <button onClick={() => handleweather(input)} className="button">
                    <i className="fas fa-search"></i> Search
                </button>
            </div>

            {weather && (
                <div className="weather-card">
                    <h2 className="city">
                        <i className="fas fa-map-marker-alt"></i> {weather.name}
                    </h2>
                    <div className="weather-details">
                        <div className="detail temp">
                            <i className="fas fa-thermometer-half"></i>
                            <span>{weather.main.temp}°C</span>
                            <p>Temperature</p>
                        </div>
                        <div className="detail humidity">
                            <i className="fas fa-tint"></i>
                            <span>{weather.main.humidity}%</span>
                            <p>Humidity</p>
                        </div>
                        <div className="detail condition">
                            <i className="fas fa-cloud"></i>
                            <span>{weather.weather[0].description}</span>
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WeatherApp