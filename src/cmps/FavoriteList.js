import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleFavoriteItem from './SingleFavoriteItem'

class FavoriteList extends Component {
    componentDidMount() {
        // console.log('componentDidMount',this.props)
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.props)
    }

    render() {
        const favoritesInfo = [];
        if (this.props.citiesInfo.length) {
            this.props.citiesInfo.forEach((cityInfo) => {
                if (this.props.currentWeather.length) {
                    this.props.currentWeather.forEach(currentWeather => {
                        // console.log(`currWeather.cityId: ${currWeather.cityId}`)
                        // console.log(`favoritesCityInfo.cityId: ${currWeather.cityId}`)
                        if (currentWeather.cityId === cityInfo.cityId && cityInfo.isFavorite) {
                            // console.log('IM INSIDE TOGETHER')
                            favoritesInfo.push({ cityInfo, currentWeather })
                        }
                    })
                } else {
                    console.log('IM INSIDE ALONE')
                    favoritesInfo.push({ cityInfo })
                }
            })//END FOREACH
        }

        console.log('favoritesInfo:', favoritesInfo)
        const favoritesInfoToRender = favoritesInfo.length ? (
            favoritesInfo.map((composedInfo, index) => {
                return (
                    <SingleFavoriteItem composedInfo={composedInfo} key={index} />
                )
            })
        ) : (<h1>No Favorites Selected </h1>)
       
        return (
            <ul className="member-list">
            
                    {favoritesInfoToRender}
             
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        citiesInfo: state.location.citiesInfo,
        currentWeather: state.weather.currentWeather
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)
