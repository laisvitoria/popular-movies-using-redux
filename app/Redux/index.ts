import { combineReducers } from '@reduxjs/toolkit'
import { combinedWelcomeReducers } from '../Features/welcome/redux'

const rootReducer = combineReducers({
    welcome: combinedWelcomeReducers
})

export default rootReducer