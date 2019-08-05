
const initState = {
    // forcastFor5Days: [],
    // forcastFor5DaysHeading: {},
    forcast: [],
    forcastDescription: '',

    currentWeather: [],

    //Errors
    weatherError: '',
    forcastError: '',
}
const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FORCAST':
                console.log(`weatherReducer > SET_FORCAST > action: ${action}`)
            // console.log('action type:',action.type)
            // console.log('action forcast:',action.forcast)

            return {
                ...state,
                forcastError: '',
                forcast: action.forcast.DailyForecasts,
                forcastDescription: action.forcast.Headline.Text
            }
        case 'SET_FORCAST_ERROR':
                console.log(`weatherReducer > SET_FORCAST_ERROR > action: ${action}`)
            return {
                ...state,
                forcastError: action.payload
            }
        case 'SET_WEATHER':
            {
                console.log(`weatherReducer > SET_WEATHER > action: ${action}`)
                //if weather exists, replace it              
                let weatherList = [...state.currentWeather];
                let isExists = false;
                let updatedWeather = weatherList.map(weather => {
                    if (weather.cityId === action.weather.cityId) {
                        isExists = true;
                        return action.weather;
                    }
                    else return weather;
                })
                // console.log('updatedWeather: ',updatedWeather)
                if (isExists) {
                    return {
                        ...state,
                        weatherError: '',
                        currentWeather: [...updatedWeather]
                    }
                } else {
                    return {
                        ...state,
                        weatherError: '',
                        currentWeather: [...state.currentWeather, action.weather]
                    }

                }

            }
        case 'SET_WEATHER_ERROR':
                console.log(`weatherReducer > SET_WEATHER_ERROR > action: ${action}`)
            return {
                ...state,
                currentForcastError: action.payload
            }
        default:
            return state;
    }
}

export default weatherReducer