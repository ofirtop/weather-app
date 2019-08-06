import WeatherService from '../../services/WeatherService'

export const getForcast = (cityId) => {
    return (dispatch, getState) => {
        WeatherService.getForcast(cityId)
            .then(forcast => {
                dispatch({ type: 'SET_FORCAST', forcast })
            })
            .catch(error => {
                dispatch({ type: 'WEATHER_ERROR', error })
            })
    }
}

export const getWeather = (cityId, isCurrent) => {
    return (dispatch, getState) => {
        WeatherService.getWeather(cityId)
            .then(weather => {
                weather.cityId = cityId;
                weather.isCurrent = isCurrent;
                dispatch({ type: 'SET_WEATHER', weather })
            })
            .catch(error => {
                dispatch({ type: 'WEATHER_ERROR', error })
            })
    }
}