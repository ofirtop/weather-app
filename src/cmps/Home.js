import React, { Component } from 'react'
import Filter from './Filter'
// import WeatherService from '../services/WeatherService'
import { connect } from 'react-redux'
import SingleDaySummary from './SingleDaySummary'
import { getForcast, getWeather } from '../store/actions/weatherActions'
import { getCityInfo, toggleFavoriteStatus, loadFavoritesFromStorage } from '../store/actions/locationActions'
// import toggleButton from './toggleButton'
import Toggle from 'react-toggle'

class Home extends Component {
    componentDidMount() {
        console.log('HOME:componentDidMount()');
        if (!this.props.location.isFavoritesLoaded) { 
            this.props.loadFavoritesFromStorage()};

        //if arrived to this page from selection in favorite Page
        let selectedId = this.props.match.params.cityId;
        console.log('check if routing from selecting a favorite: selectedID is:', selectedId);
        if (selectedId) {
            let cityInfo = this.props.citiesInfo.find(city => city.cityId === selectedId)
            console.log('cityInfo', cityInfo)
            console.log('HOME TO CALL getCityInfo')
            if (cityInfo) this.props.getCityInfo(cityInfo.cityName, true, true);
        }

        //find current city and if non, load Tel Aviv (defaultCityName)
        let currentCity = this.props.citiesInfo.filter(city => city.isCurrent)
        if (currentCity.length === 0) {
            console.log('CALLING DEFAULT CITY')
            this.props.getCityInfo(this.props.defaultCityName, false, true)
        }

    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate()`);
        //check if the previouse cityInfo isCurrent
        let cityInfoPrev = prevProps.citiesInfo.filter(cityInfo => {
            if (cityInfo === undefined) return false
            return cityInfo.isCurrent === true;
        })
        console.log('cityInfoPrev', cityInfoPrev)

        //check if the current cityInfo isCurrent
        let cityInfoCurrent = this.props.citiesInfo.filter(cityInfo => {
            if (cityInfo === undefined) return false
            return cityInfo.isCurrent === true;
        })
        console.log('cityInfoCurrent', cityInfoCurrent)

        //if before no cityInfo and now there is: send request to weather and forcast
        if (!cityInfoPrev.length && cityInfoCurrent.length) {
            console.log('componentUpdate: before no cityInfo. Now new cityInfo: sending weather & forcast requests')
            this.props.getForcast(cityInfoCurrent[0].cityId);
            this.props.getWeather(cityInfoCurrent[0].cityId, true);

            //if prev cityId not the same as current cityId: send request to weather and forcast
        } else if (cityInfoPrev.length && cityInfoCurrent.length) {
            if (cityInfoPrev[0].cityId !== cityInfoCurrent[0].cityId) {
                this.props.getForcast(cityInfoCurrent[0].cityId);
                this.props.getWeather(cityInfoCurrent[0].cityId, true);
            }
        }

    }
    handleToggleFavorite = () => {
        let city = this._getCurrentCity(this.props.citiesInfo);
        this.props.toggleFavoriteStatus(city.cityId)
        console.log(`handleToggleFavorite()`, city);
    }
    _getCurrentCity(cities) {
        console.log(`_getCurrentCity() `);
        let currentCity = cities.filter(city => city.isCurrent)
        if (currentCity.length) return currentCity[0];
        else return null;
    }
    isCurrentFavorite() {
        let currentCity = this.props.citiesInfo.find(city => city.isCurrent)
        console.log(`isCurrentFavorite() => currentCity : `, currentCity);
        if (!currentCity) return false;
        else {
            if (currentCity.isFavorite) {
                console.log('RETURN TRUE!!!!');
                return true;
            }
            else return false;
        }
    }
    render() {
        console.log(`render() `);




        //extracting WEATHER from props
        let currentWeather = this.props.currentWeather.filter(weather => weather.isCurrent)
        let weatherIcon, weatherDescription, temperatureImperialVal, temperatureImperialUnit;
        //let temperatureMetricUnit, temperatureMetricVal, isDayTime
        if (currentWeather.length) {
            weatherDescription = currentWeather[0].weatherDescription;
            temperatureImperialVal = currentWeather[0].temperatureImperialVal;
            temperatureImperialUnit = currentWeather[0].temperatureImperialUnit;
            // isDayTime = currentWeather[0].isDayTime;
            // temperatureMetricUnit = currentWeather[0].temperatureMetricUnit;
            // temperatureMetricVal = currentWeather[0].temperatureMetricVal;
            weatherIcon = currentWeather[0].weatherIcon;
            if (weatherIcon < 10) weatherIcon = `0${weatherIcon}`
        }
        const CURRENT_WEATHER_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;

        //extracting current cityInfo from props
        let cityInfo = this.props.citiesInfo.find(city => {
            if (city === undefined) return false
            return city.isCurrent
        });
        let isFavorite;
        if (cityInfo) isFavorite = cityInfo.isFavorite;
        console.log(`cityInfo ${cityInfo}, isFavorite, ${isFavorite}`)

        //in case favorite loaded from storage and cityInfo arrived from service,
        //updated is favorite status        
        // if (this.props.favorites && cityInfo) {
        //     this.props.favorites.forEach(favoriteCity => {
        //         if (cityInfo.cityName === favoriteCity) {
        //             //since the current cityInfo is also in the favorites                        
        //             if (!cityInfo.isFavorite) {
        //                 console.log('QQQQQQQQQQQQQQ')
        //                 console.log('')
        //                 console.log('current cityInfo arrived. city is in the favorites.sending toggleFavoriteStatus', cityInfo)
        //                 this.props.toggleFavoriteStatus(cityInfo.cityId);
        //             }
        //         }
        //     })
        // }


        let countryName, cityName;
        if (cityInfo) {
            countryName = cityInfo.countryName;
            cityName = cityInfo.cityName;
        }

        //extracting forcast from props
        const { forcast } = this.props;
        const { forcastDescription } = this.props;

        //extracting ERRORS from props
        const { forcastError } = this.props;
        const { currentWeatherError } = this.props;
        const errors = [forcastError, currentWeatherError].map((error, index) => <div key={index} className="red-text">{error}</div>)

        //handling toogle button text
        // console.log('cityInfo.isFavorite', cityInfo)
        // let toggleText;
        // if (cityInfo.isFavorite) toggleText = 'Remove from Favorites'
        // else toggleText = 'Add to Favorites';
        // console.log('toggleText', toggleText)

        //Creating forcast
        const dayList = forcast ? (
            forcast.map((day, index) => {
                return (
                    <SingleDaySummary day={day} key={index} />
                )
            })
        ) : (<h4>There is currently no forcast show</h4>)


        const toggleAddFavorite = (this.isCurrentFavorite()) ? 'Remove from Favorites' : "Add to Favorites";
        const colorIsFavorite = (this.isCurrentFavorite()) ? {color: 'red'} : {color: 'grey'};
        return (
            <div className="container" >
                <Filter />

                <div className="flex-space-between">
                    <div className="flex  ">
                        <img className="large-image" src={CURRENT_WEATHER_URL}
                            title={weatherDescription} alt={weatherDescription} />
                        <div className="flex-col">
                            <div>{cityName}, {countryName}</div>
                            <div>{temperatureImperialVal}{temperatureImperialUnit}</div>
                        </div>
                    </div>
                    <div className="flex centered">
                        <i className="small material-icons" style={colorIsFavorite}>favorite</i>
                        <button className="btn toogle-fav blue darken-2" onClick={this.handleToggleFavorite}>{toggleAddFavorite}</button>
                    </div>
                    {/* <label>
                        <Toggle
                            defaultChecked={this.isCurrentFavorite()}
                            onChange={this.handleToggleFavorite} />
                        <span>Add to favorites</span>
                    </label> */}

                </div>
                <div className="center main-description">{weatherDescription}</div>

                {/* <ul className="flex-space-between day-list flex"> */}
                <ul className="member-list">
                    {dayList}
                </ul>
                <p className="center blue-text darken-2 secondary-description">{forcastDescription}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        citiesInfo: state.location.citiesInfo,
        defaultCityName: state.location.defaultCityName,
        isFavoritesLoaded: state.location.isFavoritesLoaded,
        favorites: state.location.favorites,

        forcast: state.weather.forcast,
        forcastDescription: state.weather.forcastDescription,

        currentWeather: state.weather.currentWeather,

        forcastError: state.weather.forcastError,
        currentWeatherError: state.weather.currentWeatherError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCityInfo: (cityName, isFavorite, isCurrent) => dispatch(getCityInfo(cityName, isFavorite, isCurrent)),
        getForcast: (cityId) => { dispatch(getForcast(cityId)) },
        getWeather: (cityId, isCurrent) => { dispatch(getWeather(cityId, isCurrent)) },
        toggleFavoriteStatus: (cityId) => { dispatch(toggleFavoriteStatus(cityId)) },
        // isCurrentFavorite: () => { dispatch(isCurrentFavorite()) },

        // setCurrentCity: (cityId) => { dispatch(setCurrentCity(cityId)) },
        loadFavoritesFromStorage: () => { dispatch(loadFavoritesFromStorage()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)