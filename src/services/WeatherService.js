import Axios from "axios";

const getForcast = (cityId = '215854', dispatch) => {
    const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII';
    const FORCAST_URL = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${FORCAST_URL}${cityId}?apikey=${WEATHER_API_KEY} `;

    return Axios.get(query)
        .then(result => {            
            return result.data
        })
        .catch(error => {            
            throw error
        })
}
const getWeather = (cityId = '215854') => {
    const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII';
    const WEATHER_URL = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${WEATHER_URL}${cityId}?apikey=${WEATHER_API_KEY} `;

    return Axios.get(query)
        .then(result => {
            let weather = {
                isDayTime: result.data[0].IsDayTime,
                weatherIcon: result.data[0].WeatherIcon,
                weatherDescription: result.data[0].WeatherText,
                temperatureImperialVal: result.data[0].Temperature.Imperial.Value,
                temperatureImperialUnit: result.data[0].Temperature.Imperial.Unit,
                temperatureMetricVal: result.data[0].Temperature.Metric.Value,
                temperatureMetricUnit: result.data[0].Temperature.Metric.Unit,
            }            
            return weather
        })
        .catch(error => {            
            throw error
        })
}

export default {
    getForcast,
    getWeather
}