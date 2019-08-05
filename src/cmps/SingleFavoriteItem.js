import React from 'react'
import { Link } from 'react-router-dom'

const SingleFavoriteItem = (props) => {
    console.log('SingleFavoriteItem: ', props)

    let cityName = props.composedInfo.cityInfo.cityName;
    let cityId = props.composedInfo.cityInfo.cityId;
    let countryName = props.composedInfo.cityInfo.countryName;

    let temperatureImperialUnit = props.composedInfo.currentWeather.temperatureImperialUnit;
    let temperatureImperialVal = props.composedInfo.currentWeather.temperatureImperialVal;
    let weatherDescription = props.composedInfo.currentWeather.weatherDescription;
    let weatherIcon = props.composedInfo.currentWeather.weatherIcon;
    if (weatherIcon < 10) weatherIcon = `0${weatherIcon}`

    const CURRENT_WEATHER_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;
    return (
        <Link to={'/' + cityId}>
            <div className="card" >
                <div className="card-content">
                    <div>{cityName}, {countryName}</div>
                    <div>{temperatureImperialVal}, {temperatureImperialUnit}</div>
                    <img src={CURRENT_WEATHER_URL} title={weatherDescription} alt={weatherDescription} />
                    <div>{weatherDescription}</div>
                </div>
            </div>
        </Link>
    )
}

export default SingleFavoriteItem