import React, { Component } from 'react'
import { connect } from 'react-redux'
import FavoriteList from './FavoriteList'
import { getCityInfo, toggleFavoriteStatus } from '../store/actions/locationActions'
import { getWeather } from '../store/actions/weatherActions'

// const Favorites = (props) =>{
class Favorites extends Component {
  componentDidMount() {
    console.log('componentDidMount', this.props)
    //sending request for cityInfo 
    if(this.props.favorites) this.props.favorites.forEach((favoriteCityName) => {
      //check if iterated city isCurrent
      console.log('favoriteCityName', favoriteCityName)
      let cityInfo = this.props.citiesInfo.find(cityInfo => cityInfo.cityName === favoriteCityName);
      if (!cityInfo) {
        console.log('send request for cityInfo. city is in favorite list but not in the cityInfo array')
        this.props.getCityInfo(favoriteCityName, true, false)
      }
      else {//city in cityInfo Array, not marked as favorite, but is in the favorites
        toggleFavoriteStatus(favoriteCityName)
        console.log('ABOUT TO SET TOGGLE')
        this.props.getWeather(cityInfo.cityId, cityInfo.isCurrent)
      }
    })
  }
  //sending request for forcast if cityInfo is a favorite
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate', this.props)

    this.props.citiesInfo.forEach((cityInfo) => {
      //if cityInfo exists and it is favorite
      let city = this.props.favorites.find(cityName => cityInfo.CityName === cityName)
      if (city) {
        //if city dont have weather, request one
        let selectedWeather = this.props.currentWeather.find(weather => weather.cityId === cityInfo.cityId)
        if (!selectedWeather) this.props.getWeather(cityInfo.cityId, cityInfo.isCurrent)
      }
    })
  }
  render() {
    //console.log('FAVORITES: ',this.props)

    return (
      <div className="container">
        <h4 className="center">Favorites</h4>
        <FavoriteList />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    citiesInfo: state.location.citiesInfo,
    favorites: state.location.favorites,
    currentWeather: state.location.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityInfo: (cityName, isFavorite, isCurrent) => dispatch(getCityInfo(cityName, isFavorite, isCurrent)),
    getWeather: (cityId, isCurrent) => { dispatch(getWeather(cityId, isCurrent)) },
    toggleFavoriteStatus: (cityName) => { dispatch(toggleFavoriteStatus(cityName)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)