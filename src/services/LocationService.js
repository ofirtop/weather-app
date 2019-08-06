// import Axios from "axios";
var fakeCityInfoRes1 = [
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]
var fakeCityInfoRes2 = [
  {
    "Version": 1,
    "Key": "215855",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Madrid",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]
var fakeCityInfoRes3 = [
  {
    "Version": 1,
    "Key": "215856",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Barcelona",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]
var fakeCityInfoRes4 = [
  {
    "Version": 1,
    "Key": "215857",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Canbara",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]
var fakeCityInfoRes5 = [
  {
    "Version": 1,
    "Key": "215858",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "San Francisoco",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]
var fakeCityInfoRes6 = [
  {
    "Version": 1,
    "Key": "215859",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Jerusalem",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  }
]

const getCityInfoByName = (cityName) => {
  //BEFORE PRODUCTION - OPEN THIS LINES
  // const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
  // const LOCATION_AUTO_COMPLETE_BASE = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
  // const query = `${LOCATION_AUTO_COMPLETE_BASE}?apikey=${WEATHER_API_KEY}&q=${cityName} `

  // return Axios.get(query)
  // .then(result =>{
  //     let cityInfo = {
  //         // countryName : result.data[0].Country.LocalizedName,
  //         cityId : result.data[0].Key,
  //         cityName : result.data[0].LocalizedName
  //     };

  //     return cityInfo
  // })
  // .catch(error =>{
  // })

  //BEFORE PRODUCTION - DELETE THIS LINE
  let cityInfo1 = {
    countryName: fakeCityInfoRes1[0].Country.LocalizedName,
    cityId: fakeCityInfoRes1[0].Key,
    cityName: fakeCityInfoRes1[0].LocalizedName
  };
  let cityInfo2 = {
    countryName: fakeCityInfoRes2[0].Country.LocalizedName,
    cityId: fakeCityInfoRes2[0].Key,
    cityName: fakeCityInfoRes2[0].LocalizedName
  };
  let cityInfo3 = {
    countryName: fakeCityInfoRes3[0].Country.LocalizedName,
    cityId: fakeCityInfoRes3[0].Key,
    cityName: fakeCityInfoRes3[0].LocalizedName
  };
  let cityInfo4 = {
    countryName: fakeCityInfoRes4[0].Country.LocalizedName,
    cityId: fakeCityInfoRes4[0].Key,
    cityName: fakeCityInfoRes4[0].LocalizedName
  };
  let cityInfo5 = {
    countryName: fakeCityInfoRes5[0].Country.LocalizedName,
    cityId: fakeCityInfoRes5[0].Key,
    cityName: fakeCityInfoRes5[0].LocalizedName
  };
  let cityInfo6 = {
    countryName: fakeCityInfoRes6[0].Country.LocalizedName,
    cityId: fakeCityInfoRes6[0].Key,
    cityName: fakeCityInfoRes6[0].LocalizedName
  };

  switch (cityName) {
    case '1':
    case 'Tel Aviv':
    case '215854':
      return Promise.resolve(cityInfo1)//215854 Tel Aviv
    case '2':
    case 'Madrid':
    case '215855':
      return Promise.resolve(cityInfo2)//215855 Madrid
    case '3':
    case 'Barcelona':
    case '215856':
      return Promise.resolve(cityInfo3)//215856 Barcelona
    case '4':
    case 'Canbara':
    case '215857':
      return Promise.resolve(cityInfo4)//215857 Canbara
    case '5':
    case 'San Francisoco':
    case '215858':
      return Promise.resolve(cityInfo5)//215858 San Francisoco
    case '6':
    case 'Jerusalem':
    case '215859':
      return Promise.resolve(cityInfo6)//215859 Jerusalem
    default:
      return Promise.resolve(cityInfo6)
  }
}



export default {
  getCityInfoByName
}