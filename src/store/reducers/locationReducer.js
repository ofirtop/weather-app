import { saveToStorage } from '../../services/utilService'

const initState = {
    favorites: [],//City names
    isFavoritesLoaded: false,
    citiesInfo: [],
    defaultCityName: 'Tel Aviv',
    error: ''
}

const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_FAVORITES_FROM_STORAGE':
            {
                return {
                    ...state,
                    isFavoritesLoaded: true,
                    favorites: action.favorites,
                    error: ''
                }
            }
        case 'SET_CITY_INFO':
            {
                //check if cityInfo exists
                let cities = [...state.citiesInfo];

                //if arrived city isCurrent, set all cities to NOT current
                if (action.cityInfo.isCurrent) cities.forEach(city => city.isCurrent = false)

                //check if the arrived city is in the array
                let selectedCity = cities.find(cityInfo => cityInfo.cityId === action.cityInfo.cityId);
                if (!selectedCity) {
                    return {
                        ...state,
                        citiesInfo: [...cities, action.cityInfo],
                        error: ''
                    }
                } else {
                    selectedCity.isCurrent = action.cityInfo.isCurrent;
                    return {
                        ...state,
                        citiesInfo: [...cities],
                        error: ''
                    }
                }
            }
        case 'TOGGLE_FAVORITE_STATUS':
            {
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
                } else {
                    //if it has been selected as NOT favorite
                    if (cityIndex >= 0) favoriteNames.splice(cityIndex, 1);
                }
                saveToStorage('favorites', favoriteNames)
                return {
                    ...state,
                    favorites: favoriteNames,
                    citiesInfo: [...cities],
                    error: ''
                }
            }
        case 'LOCATION_ERROR':
            return {
                ...state,
                error: JSON.stringify(action.error)
            }
        default:
            return state;
    }
}

export default locationReducer