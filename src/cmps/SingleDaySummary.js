import React from 'react'

const SingleDaySummary = (props) => {
    const { day } = props

    const maxImperialVal = day.Temperature.Maximum.Value;
    const maxMetricVal = Math.round(toCelsius(day.Temperature.Maximum.Value))

    const minImperialVal = day.Temperature.Minimum.Value;
    const minMetriclVal = Math.round(toCelsius(day.Temperature.Minimum.Value))

    const ImperialUnit = day.Temperature.Maximum.Unit;
    const MetricUnit = 'C';


    let dayIcon = day.Day.Icon;
    if (dayIcon < 10) dayIcon = `0${dayIcon}`

    let nightIcon = day.Night.Icon;
    if (nightIcon < 10) nightIcon = `0${nightIcon}`

    const DAY_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${dayIcon}-s.png`;
    const NIGHT_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${nightIcon}-s.png`;

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const isCelsius = (props.scale === 'c') ? 'hide' : '';
    const isFahrenheit = (props.scale !== 'c') ? 'hide' : '';

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9)
    }
    return (
        <div className="card forcast-item" >
            <div className="card-content">
                <div className="card-title">{weekdays[new Date(day.Date).getDay()]}</div>
                <img src={DAY_URL} title={props.day.Day.IconPhrase} alt={props.day.Day.IconPhrase} />
                <p className={isCelsius}>Max {maxImperialVal}{ImperialUnit}</p>
                <p className={isFahrenheit}>Max {maxMetricVal}{MetricUnit}</p>
                <hr />
                <img src={NIGHT_URL} title={props.day.Night.IconPhrase} alt={props.day.Night.IconPhrase} />
                <p className={isCelsius}>Min {minImperialVal}{ImperialUnit}</p>
                <p className={isFahrenheit}>Min {minMetriclVal}{MetricUnit}</p>
            </div>
        </div>
    )
}

export default SingleDaySummary