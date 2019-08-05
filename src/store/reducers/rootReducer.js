import locationReducer from './locationReducer'
import weatherReducer from './weatherReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    weather: weatherReducer,
    location: locationReducer
})

export default rootReducer