import LocationService from '../../services/LocationService'
import { loadFromStorage } from '../../services/utilService'

export const getCityInfo = (cityName, isFavorite, isCurrent) => {
    return (dispatch, getState) => {
        LocationService.getCityInfoByName(cityName)
            .then(cities => {
                //creating options of cities for the filter autocomplete 
                let optionalCities = {};
                cities.forEach(city => {
                    optionalCities[city.LocalizedName + ',' + city.Country.LocalizedName] = null;
                })
                dispatch({ type: 'SET_CITIES_OPTIONS', optionalCities })

                //create the city to be rendered
                let city = cities[0];
                let cityInfo = {
                    cityId: city.Key,
                    cityName: city.LocalizedName,
                    countryName: city.Country.LocalizedName,
                    isCurrent,
                    isFavorite
                };
                dispatch({ type: 'SET_CITY_INFO', cityInfo })
            })
            .catch(error => {
                dispatch({ type: 'LOCATION_ERROR', error })
            })
    }
}

export const toggleFavoriteStatus = (cityId) => {
    return { type: 'TOGGLE_FAVORITE_STATUS', cityId }
}

export const loadFavoritesFromStorage = () => {
    return (dispatch, getState) => {
        //async code - accessing location service
        let favorites = loadFromStorage('favorites')
        if (!favorites) favorites = [];
        dispatch({ type: 'LOAD_FAVORITES_FROM_STORAGE', favorites })
    }
}
