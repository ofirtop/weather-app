import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switch from 'react-switch'


class toggleButton extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
        this.handleToggleFavorite.bind(this);
    }
    handleToggleFavorite (checked) {
        this.setState({checked})
    }

    render() {
        return (
            <div>
                <h2>Toggle Switch</h2>
                <Switch
                    className="reat-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
                <p>this switch is <b>{this.state.checked ? 'on' : 'off'}</b></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        citiesInfo: state.location.citiesInfo
    }
}
export default connect(mapStateToProps)(toggleButton)