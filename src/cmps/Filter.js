import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCityInfo } from '../store/actions/locationActions'

class Filter extends Component {
    state = {
        cityName: ''
    }
    handleChange = (e) => {
        this.setState({
            cityName:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getCityInfo(this.state.cityName,false,true);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container filter-container">
                <input type="text" placeholder="Search for weather location" onChange={this.handleChange} />
            </form>
        )
    }
}

//allow component to dispach action to set the store
const mapDispatchToProps = (dispatch) => {
    return {
        getCityInfo: (cityName,isFavorite,isCurrent) => dispatch(getCityInfo(cityName,isFavorite,isCurrent))
    }
}
export default connect(null, mapDispatchToProps)(Filter)