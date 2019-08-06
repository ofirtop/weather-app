
const initState = {
    forcast: [],
    forcastDescription: '',
    currentWeather: [],
    error: '',
}
const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FORCAST':
            return {
                ...state,
                forcast: action.forcast.DailyForecasts,
                forcastDescription: action.forcast.Headline.Text
            }
        case 'SET_WEATHER':
            {
                let weatherList = [...state.currentWeather];
                let isExists = false;
                let updatedWeather = weatherList.map(weather => {
                    if (weather.cityId === action.weather.cityId) {
                        isExists = true;
                        return action.weather;
                    }
                    else return weather;
                })
                if (isExists) {
                    return {
                        ...state,
                        currentWeather: [...updatedWeather]
                    }
                } else {
                    return {
                        ...state,
                        currentWeather: [...state.currentWeather, action.weather]
                    }
                }
            }
        case 'WEATHER_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default weatherReducer