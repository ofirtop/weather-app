import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleFavoriteItem from './SingleFavoriteItem'

class FavoriteList extends Component {

    render() {
        const themeColor = (this.props.theme === 'light') ? { background: 'white' } : { background: 'black' };

        const favoritesInfo = [];
        //composing an object that have cityInfo and weater (only if favorite)
        if (this.props.citiesInfo.length) {
            this.props.citiesInfo.forEach((cityInfo) => {
                if (this.props.currentWeather.length) {
                    this.props.currentWeather.forEach(currentWeather => {
                        if (currentWeather.cityId === cityInfo.cityId && cityInfo.isFavorite) {
                            favoritesInfo.push({ cityInfo, currentWeather })
                        }
                    })
                }
            })
        }

        const favoritesInfoToRender = favoritesInfo.length ? (
            favoritesInfo.map((composedInfo, index) => {
                return (
                    <SingleFavoriteItem scale={this.props.scale} composedInfo={composedInfo} key={index} />
                )
            })
        ) : (<div className="" >No Favorites Selected </div>)

        return (
            <ul className="weather-container">
                <div className="weather-list">
                    {favoritesInfoToRender}
                </div>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        citiesInfo: state.location.citiesInfo,
        currentWeather: state.weather.currentWeather,
        scale: state.setting.currentScale
    }
}

export default connect(mapStateToProps)(FavoriteList)
