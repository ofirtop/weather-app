// import Axios from "axios";
// import './fiveDaysWeather.json'

var fake5DaysForcast = {
    "Headline": {
        "EffectiveDate": "2019-08-03T08:00:00+03:00",
        "EffectiveEpochDate": 1564808400,
        "Severity": 4,
        "Text": "Pleasant this weekend",
        "Category": "",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2019-07-31T07:00:00+03:00",
            "EpochDate": 1564545600,
            "Temperature": {
                "Minimum": {
                    "Value": 177,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 192,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
        },
        {
            "Date": "2019-08-01T07:00:00+03:00",
            "EpochDate": 1564632000,
            "Temperature": {
                "Minimum": {
                    "Value": 78,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
        },
        {
            "Date": "2019-08-02T07:00:00+03:00",
            "EpochDate": 1564718400,
            "Temperature": {
                "Minimum": {
                    "Value": 76,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
        },
        {
            "Date": "2019-08-03T07:00:00+03:00",
            "EpochDate": 1564804800,
            "Temperature": {
                "Minimum": {
                    "Value": 79,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
        },
        {
            "Date": "2019-08-04T07:00:00+03:00",
            "EpochDate": 1564891200,
            "Temperature": {
                "Minimum": {
                    "Value": 77,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 90,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
        }
    ]
}

var fakeCurrentForcastFalse = [
    {
        "LocalObservationDateTime": "2019-08-02T10:01:00+03:00",
        "EpochTime": 1564729260,
        "WeatherText": "Clouds and sun",
        "WeatherIcon": 4,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 30.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 86,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
]

const getForcast = (cityId = '215854') => {
    //BEFORE PRODUCTION - OPEN THIS LINES
    // const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII';
    // const FORCAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    // const query = `${FORCAST_URL}${cityId}?apikey=${WEATHER_API_KEY} `;    

    // return Axios.get(query)
    //     .then(result => {
    //         console.log(`getForcast: cityId: ${cityId}, result: ${result.data}` )
    //         return result.data
    //     })
    //     .catch(error => {
    //         console.log('getForcast: Error : ',error)
    //     })

    //BEFORE PRODUCTION - DELETE THIS LINE
    return Promise.resolve(fake5DaysForcast)
}
const getWeather = (cityId = '215854'/*,isFavorite*/) => {
    //BEFORE PRODUCTION - OPEN THIS LINES
    // const WEATHER_API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII';
    // const WEATHER_URL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    // const query = `${WEATHER_URL}${cityId}?apikey=${WEATHER_API_KEY} `;

    // return Axios.get(query)
    //     .then(result => {
    //         // console.log(result.data)
    //         let weather = {
    //             isDayTime: result.data[0].IsDayTime,
    //             weatherIcon: result.data[0].WeatherIcon,
    //             weatherDescription: result.data[0].WeatherText,
    //             temperatureImperialVal: result.data[0].Temperature.Imperial.Value,
    //             temperatureImperialUnit: result.data[0].Temperature.Imperial.Unit,
    //             temperatureMetricVal: result.data[0].Temperature.Metric.Value,
    //             temperatureMetricUnit: result.data[0].Temperature.Metric.Unit,
    //         }
    //         console.log(`getWeather: cityId: ${cityId}, result: ${weather}` )
    //         return weather
    //     })
    //     .catch(error => {
    //         console.log('getWeather Error: ', error)
    //     })

    //BEFORE PRODUCTION - DELETE THIS LINE

    let weather = {
        isDayTime: fakeCurrentForcastFalse[0].IsDayTime,
        weatherIcon: fakeCurrentForcastFalse[0].WeatherIcon,
        weatherDescription: fakeCurrentForcastFalse[0].WeatherText,
        temperatureImperialVal: fakeCurrentForcastFalse[0].Temperature.Imperial.Value,
        temperatureImperialUnit: fakeCurrentForcastFalse[0].Temperature.Imperial.Unit,
        temperatureMetricVal: fakeCurrentForcastFalse[0].Temperature.Metric.Value,
        temperatureMetricUnit: fakeCurrentForcastFalse[0].Temperature.Metric.Unit,
    }

    return Promise.resolve(weather)
}


export default {
    getForcast,
    getWeather
}