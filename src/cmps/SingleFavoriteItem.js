import React from 'react'
import { Link } from 'react-router-dom'

const SingleFavoriteItem = (props) => {
    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9)
    }

    let cityName = props.composedInfo.cityInfo.cityName;
    let cityId = props.composedInfo.cityInfo.cityId;
    let countryName = props.composedInfo.cityInfo.countryName;

    let temperatureImperialVal = props.composedInfo.currentWeather.temperatureImperialVal;
    let temperatureMetricVal = Math.round(toCelsius(temperatureImperialVal - 32 * (5 / 9)))

    let temperatureImperialUnit = props.composedInfo.currentWeather.temperatureImperialUnit;
    let temperatureMetricUnit = 'C';


    let weatherDescription = props.composedInfo.currentWeather.weatherDescription;
    let weatherIcon = props.composedInfo.currentWeather.weatherIcon;
    if (weatherIcon < 10) weatherIcon = `0${weatherIcon}`

    const CURRENT_WEATHER_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;

    const isCelsius = (props.scale === 'c') ? 'hide' : '';
    const isFahrenheit = (props.scale !== 'c') ? 'hide' : '';

    return (
        <Link to={'/' + cityId} className="weather-item">
            <div className="card" >
                <div className="card-content">
                    <div>{cityName}, {countryName}</div>
                    <div className={isCelsius}>{temperatureImperialVal}{temperatureImperialUnit}</div>
                    <div className={isFahrenheit}>{temperatureMetricVal}{temperatureMetricUnit}</div>
                    <img src={CURRENT_WEATHER_URL} title={weatherDescription} alt={weatherDescription} />
                    <div>{weatherDescription}</div>
                </div>
            </div>
        </Link>
    )
}

export default SingleFavoriteItem