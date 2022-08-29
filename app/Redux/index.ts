import { combineReducers } from '@reduxjs/toolkit'
import { combinedWelcomeReducers } from '../Features/welcome/redux'
import { combinedListMoviesReducers } from '../Features/listMovies/redux'

const rootReducer = combineReducers({
    welcome: combinedWelcomeReducers,
    listMovies: combinedListMoviesReducers
})

export default rootReducer

export interface GlobalState {
    welcome: ReturnType<typeof combinedWelcomeReducers>
    listMovies: ReturnType<typeof combinedListMoviesReducers>
}