import LocationService from '../../services/LocationService'
import { saveToStorage, loadFromStorage } from '../../services/utilService'

export const getCityInfo = (cityName, isFavorite, isCurrent) => {
    return (dispatch, getState) => {
        //async code - accessing location service
        // console.log('isCurrent',isCurrent);
        // console.log('isFavorite',isFavorite);
        console.log('getCityInfo about to call the service')
        LocationService.getCityInfoByName(cityName)
            .then(cityInfo => {
                cityInfo.isFavorite = isFavorite;
                cityInfo.isCurrent = isCurrent;
                console.log(`Service Response: cityInfo: ${cityInfo} `)
                dispatch({ type: 'SET_CITY_INFO', cityInfo })
            })
            .catch(error => {
                dispatch({ type: 'SET_CITY_INFO_ERROR', error })
            })
    }
}

export const toggleFavoriteStatus = (cityId) => {
    console.log(cityId)
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

// export const isFavoritesLoaded = () =>{
//     return { type: 'SET_FAVORITE_LOADED' }
// }