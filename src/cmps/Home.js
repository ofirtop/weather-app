import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getForcast, getWeather } from '../store/actions/weatherActions'
import { getCityInfo, toggleFavoriteStatus, loadFavoritesFromStorage } from '../store/actions/locationActions'
import { toggleScale, toggleTheme } from '../store/actions/settingActions'
import utilService from '../services/utilService'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Filter from './Filter'
import SingleDaySummary from './SingleDaySummary'

class Home extends Component {
    componentDidMount() {
        if (!this.props.location.isFavoritesLoaded) {
            this.props.loadFavoritesFromStorage()
        };

        //if arrived to this page from selection in favorite Page
        let selectedId = this.props.match.params.cityId;
        if (selectedId) {
            let cityInfo = this.props.citiesInfo.find(city => city.cityId === selectedId)
            if (cityInfo) this.props.getCityInfo(cityInfo.cityName, true, true);
        }

        let currentCity = this.props.citiesInfo.find(city => city.isCurrent)
        if (!currentCity) {
            let favoriteList = utilService.loadFromStorage('favorites');
            if (favoriteList) {
                let isFavorite = favoriteList.find(favoriteCity => favoriteCity === this.props.defaultCityName)
                this.props.getCityInfo(this.props.defaultCityName, isFavorite ? true : false, true)
            } else {

                this.props.getCityInfo(this.props.defaultCityName, false, true)
            }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        //check if the previouse cityInfo isCurrent
        let cityInfoPrev = prevProps.citiesInfo.filter(cityInfo => {
            if (cityInfo === undefined) return false
            return cityInfo.isCurrent === true;
        })

        //check if the current cityInfo isCurrent
        let cityInfoCurrent = this.props.citiesInfo.filter(cityInfo => {
            if (cityInfo === undefined) return false
            return cityInfo.isCurrent === true;
        })

        //if before no cityInfo and now there is: send request to weather and forcast
        if (!cityInfoPrev.length && cityInfoCurrent.length) {
            this.props.getForcast(cityInfoCurrent[0].cityId);
            this.props.getWeather(cityInfoCurrent[0].cityId, true);

            //if prev cityId not the same as current cityId: send request to weather and forcast
        } else if (cityInfoPrev.length && cityInfoCurrent.length) {
            if (cityInfoPrev[0].cityId !== cityInfoCurrent[0].cityId) {
                this.props.getForcast(cityInfoCurrent[0].cityId);
                this.props.getWeather(cityInfoCurrent[0].cityId, true);
            }
        }

        //handle location errors
        if ((prevProps.locationError !== this.props.locationError) &&
            this.props.locationError !== '') {
            this.notify(this.props.locationError)
        }
        //handle weather errors
        if ((prevProps.weatherError !== this.props.weatherError) &&
            this.props.weatherError !== '') {
            this.notify(this.props.weatherError)
        }
    }
    handleToggleFavorite = () => {
        let city = this._getCurrentCity(this.props.citiesInfo);
        this.props.toggleFavoriteStatus(city.cityId)
    }
    _getCurrentCity(cities) {
        let currentCity = cities.filter(city => city.isCurrent)
        if (currentCity.length) return currentCity[0];
        else return null;
    }
    isCurrentFavorite() {
        let currentCity = this.props.citiesInfo.find(city => city.isCurrent)
        if (!currentCity) return false;
        else {
            if (currentCity.isFavorite) {
                return true;
            }
            else return false;
        }
    }
    isCurrentCelsius() {
        return this.props.scale === 'c'
    }
    handleToggleScale = () => {
        this.props.toggleScale()
    }
    handleToggleTheme = () => {
        this.props.toggleTheme()
    }
    notify(msg) {
        toast(msg)
    }
    render() {
        //extracting WEATHER from props
        let currentWeather = this.props.currentWeather.filter(weather => weather.isCurrent)
        let weatherIcon, weatherDescription, temperatureImperialVal, temperatureImperialUnit;
        let temperatureMetricUnit, temperatureMetricVal; //, isDayTime
        if (currentWeather.length) {
            weatherDescription = currentWeather[0].weatherDescription;

            temperatureImperialVal = currentWeather[0].temperatureImperialVal;
            temperatureImperialUnit = currentWeather[0].temperatureImperialUnit;

            temperatureMetricVal = currentWeather[0].temperatureMetricVal;
            temperatureMetricUnit = currentWeather[0].temperatureMetricUnit;

            weatherIcon = currentWeather[0].weatherIcon;
            if (weatherIcon < 10) weatherIcon = `0${weatherIcon}`
        }
        const CURRENT_WEATHER_URL = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherIcon}-s.png`;

        //extracting current cityInfo from props
        let cityInfo = this.props.citiesInfo.find(city => {
            if (city === undefined) return false
            return city.isCurrent
        });

        let countryName, cityName;
        if (cityInfo) {
            countryName = cityInfo.countryName;
            cityName = cityInfo.cityName;
        }

        //extracting forcast from props
        const { forcast } = this.props;
        const { forcastDescription } = this.props;

        //Creating forcast
        const dayList = forcast ? (
            forcast.map((day, index) => {
                return (
                    <SingleDaySummary scale={this.props.scale} day={day} key={index} />
                )
            })
        ) : (<h4>There is currently no forcast show</h4>)


        const isCelsius = (this.isCurrentCelsius()) ? 'hide' : '';
        const isFahrenheit = (!this.isCurrentCelsius()) ? 'hide' : '';
        const toggleScale = (this.isCurrentCelsius()) ? 'F' : 'C';
        const toggleAddFavorite = (this.isCurrentFavorite()) ? 'Remove Favorite' : 'Add to Favorites';
        const colorIsFavorite = (this.isCurrentFavorite()) ? { color: 'red' } : { color: 'grey' };
        const toggleTheme = (this.props.theme==='light') ? 'D' : 'L';

        return (
            <div className="main-container" >
                <Filter />
                <div className="flex-space-between">
                    <div className="flex curr-city">
                        <img className="large-image" src={CURRENT_WEATHER_URL}
                            title={weatherDescription} alt={weatherDescription} />
                        <div className="flex-col">
                            <div>{cityName}, {countryName}</div>
                            <div className={isCelsius}>{temperatureImperialVal}{temperatureImperialUnit}</div>
                            <div className={isFahrenheit}>{temperatureMetricVal}{temperatureMetricUnit}</div>
                        </div>
                    </div>
                    <div className="flex centered add-fav">
                        <i className="small material-icons" style={colorIsFavorite}>favorite</i>
                        <button className="btn toggle-fav blue darken-2" onClick={this.handleToggleFavorite}>{toggleAddFavorite}</button>
                        <div className="right setting-action">
                            <button className="btn toggle-setting blue darken-2" title="Temperature System [Fahrenheit \ Celsius]" onClick={this.handleToggleScale}>{toggleScale}</button>
                            <button className="btn toggle-setting blue darken-2" title="Change Theme [Dark \ Light]" onClick={this.handleToggleTheme}>{toggleTheme}</button>
                        </div>
                    </div>
                </div>
                <div className="center main-description">{weatherDescription}</div>
                <ul className="forcast-list">
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
        weatherError: state.weather.error,
        locationError: state.location.error,
        scale: state.setting.currentScale,
        theme: state.setting.currentTheme
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCityInfo: (cityName, isFavorite, isCurrent) => dispatch(getCityInfo(cityName, isFavorite, isCurrent)),
        getForcast: (cityId) => { dispatch(getForcast(cityId)) },
        getWeather: (cityId, isCurrent) => { dispatch(getWeather(cityId, isCurrent)) },
        toggleFavoriteStatus: (cityId) => { dispatch(toggleFavoriteStatus(cityId)) },
        toggleScale: () => { dispatch(toggleScale()) },
        toggleTheme: () => { dispatch(toggleTheme()) },
        loadFavoritesFromStorage: () => { dispatch(loadFavoritesFromStorage()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)