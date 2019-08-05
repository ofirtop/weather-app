import WeatherService from '../../services/WeatherService'

export const getForcast = (cityId) => {
    // console.log(`getForcast cityId: ${cityId}`)
    return (dispatch, getState) => {
        WeatherService.getForcast(cityId)
            .then(forcast => {
                dispatch({ type: 'SET_FORCAST', forcast })
            })
            .catch(error => {
                dispatch({ type: 'SET_FORCAST_ERROR', error })
            })
    }
}

export const getWeather = (cityId, isCurrent) => {
    // console.log(`getWeather cityId: ${cityId}, isFavorite ${isFavorite}, isCurrent ${isCurrent}`)
    return (dispatch, getState) => {
        WeatherService.getWeather(cityId)
            .then(weather => {
                //console.log('WEATHER: ',result)
                weather.cityId = cityId;
                // weather.isFavorite = isFavorite;
                weather.isCurrent = isCurrent;
                dispatch({ type: 'SET_WEATHER', weather })
            })
            .catch(error => {
                dispatch({ type: 'SET_WEATHER_ERROR', error })
            })
    }
}