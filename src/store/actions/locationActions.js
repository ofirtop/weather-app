import LocationService from '../../services/LocationService'
import { loadFromStorage } from '../../services/utilService'

export const getCityInfo = (cityName, isFavorite, isCurrent) => {
    return (dispatch, getState) => {
        LocationService.getCityInfoByName(cityName)
            .then(cityInfo => {
                cityInfo.isFavorite = isFavorite;
                cityInfo.isCurrent = isCurrent;
                if(cityName==='Madrid') dispatch({ type: 'LOCATION_ERROR', error:cityName })
                else dispatch({ type: 'SET_CITY_INFO', cityInfo })                
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
