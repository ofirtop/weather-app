import React from 'react'

const SingleDaySummary = (props) => {
    const { day } = props    
    let dayIcon = day.Day.Icon;
    if(dayIcon<10) dayIcon = `0${dayIcon}`
    
    let nightIcon = day.Night.Icon;
    if(nightIcon<10) nightIcon = `0${nightIcon}`

    const DAY_URL   = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${dayIcon}-s.png`;
    const NIGHT_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${nightIcon}-s.png`;
    
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="card week-day" >
            <div className="card-content">
                <div className="card-title">{weekdays[new Date(day.Date).getDay()]}</div>  
                <img src={DAY_URL} title={props.day.Day.IconPhrase} alt={props.day.Day.IconPhrase}/>                 
                <p>Max {day.Temperature.Maximum.Value}{day.Temperature.Maximum.Unit}</p>
                <hr/>
                <img src={NIGHT_URL} title={props.day.Night.IconPhrase} alt={props.day.Night.IconPhrase}/>                 
                <p>Min {day.Temperature.Minimum.Value}{day.Temperature.Minimum.Unit}</p>
            </div>
        </div>
    )
}

export default SingleDaySummary