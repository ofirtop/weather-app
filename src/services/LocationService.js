import Axios from "axios";

const getCityInfoByName = (cityName) => {
  const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
  const LOCATION_AUTO_COMPLETE_BASE = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
  const query = `${LOCATION_AUTO_COMPLETE_BASE}?apikey=${WEATHER_API_KEY}&q=${cityName} `

  return Axios.get(query)
    .then(result => {
      let cityInfo = {
        cityId: result.data[0].Key,
        cityName: result.data[0].LocalizedName
      };

      return cityInfo
    })
    .catch(error => {
      throw error
    })
}


export default {
  getCityInfoByName
}