import locationReducer from './locationReducer'
import weatherReducer from './weatherReducer'
import settingReducer from './settingReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    weather: weatherReducer,
    location: locationReducer,
    setting: settingReducer
})

export default rootReducer