import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCityInfo } from '../store/actions/locationActions'
// Import Materialize
import M from "materialize-css";

class Filter extends Component {
    componentDidMount() {
        let autocomplete = document.getElementById('autocomplete-input');
        let instance = M.Autocomplete.init(autocomplete, {
            data: this.props.optionalCities, onAutocomplete: (val) => {
                let index = val.indexOf(',')
                let result = val.substring(0, index)
                this.props.getCityInfo(result, false, true);
            }
        });
    }
    handleChange = (e) => {
        this.props.getCityInfo(e.target.value, false, true);
    }
    render() {

        let autocomplete = document.getElementById('autocomplete-input');
        if (autocomplete) {
            let instance = M.Autocomplete.getInstance(autocomplete)
            if (this.props.optionalCities) instance.updateData(this.props.optionalCities);

        }        
        const fontColor = (this.props.theme === 'light') ? { color: 'black' } : { color: 'white' };
        return (
            <form onSubmit={this.handleSubmit} className="container filter-container">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" onChange={this.handleChange}
                                    className="autocomplete" style={fontColor} />
                                <label htmlFor="autocomplete-input">Search for weather location</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        optionalCities: state.location.optionalCities,
        theme: state.setting.currentTheme
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCityInfo: (cityName, isFavorite, isCurrent) => dispatch(getCityInfo(cityName, isFavorite, isCurrent))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)