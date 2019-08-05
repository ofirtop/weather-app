import { saveToStorage, loadFromStorage } from '../../services/utilService'

const initState = {
    favorites: [],//City names
    isFavoritesLoaded: false,
    citiesInfo: [],
    defaultCityName: 'Tel Aviv',
    errorReceived: ''
}

const locationReducer = (state = initState, action) => {
    // console.log('entering location reducer: ',action)
    switch (action.type) {
        case 'LOAD_FAVORITES_FROM_STORAGE':
            {
                console.log('LOAD_FAVORITES_FROM_STORAGE ', action.favorites)
                return {
                    ...state,
                    isFavoritesLoaded: true,
                    favorites: action.favorites
                }
            }
        case 'SET_CITY_INFO':
            {
                console.log(`SET_CITY_INFO ${action}`)
                //check if cityInfo exists
                let cities = [...state.citiesInfo];

                //if arrived city isCurrent, set all cities to NOT current
                if (action.cityInfo.isCurrent) cities.forEach(city => city.isCurrent = false)

                //check if the arrived city is in the array
                let selectedCity = cities.find(cityInfo => cityInfo.cityId === action.cityInfo.cityId);
                if (!selectedCity) {
                    return {
                        ...state,
                        citiesInfo: [...cities, action.cityInfo]
                    }
                } else {
                    selectedCity.isCurrent = action.cityInfo.isCurrent;
                    return {
                        ...state,
                        citiesInfo: [...cities]
                    }
                }
            }
        case 'TOGGLE_FAVORITE_STATUS':
            {
                console.log(`TOGGLE_FAVORITE_STATUS: ${action}`)
                let cities = [...state.citiesInfo];
                //change the FAVORITE attribute 
                let selectedCity = cities.find(cityInfo => cityInfo.cityId === action.cityId);
                selectedCity.isFavorite = !selectedCity.isFavorite;

                //check if cityName exists in the favorites
                let favoriteNames = [...state.favorites];
                let cityIndex = favoriteNames.indexOf(selectedCity.cityName);

                //if it has been selected as favorite
                if (selectedCity.isFavorite) {
                    //insert to favorites if not exists
                    if (cityIndex < 0) favoriteNames = [...favoriteNames, selectedCity.cityName];
                    console.log(favoriteNames, " - favoriteNames: IF")
                    //  if (cityIndex < 0) favoriteNames.push(selectedCity.cityName);
                } else {
                    //if it has been selected as NOT favorite
                    if (cityIndex >= 0) favoriteNames.splice(cityIndex, 1);
                    console.log(favoriteNames, " - favoriteNames: ELSE")
                }
                saveToStorage('favorites', favoriteNames)
                return {
                    ...state,
                    favorites: favoriteNames,
                    citiesInfo: [...cities]
                }
            }
        // case 'IS_CURRENT_FAVORITE':
        //     console.log(`locationReducer > SET_CURRENT_CITY > action: ${action}`)

        //     return {
        //         ...state,
        //         errorReceived: ''
        //     }
        case 'SET_LOCATION_ERROR':
            console.log(`locationReducer > SET_LOCATION_ERROR > action: ${action}`)
            return {
                ...state,
                errorReceived: ''
            }
        default:
            return state;
    }
}

export default locationReducer