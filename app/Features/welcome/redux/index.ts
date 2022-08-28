import { combineReducers } from "@reduxjs/toolkit"
import welcomeEntity from "./welcomeEntity"
import welcomeUI from "./welcomeUI"

const welcomeReducers = {
    ui: welcomeUI,
    entities: welcomeEntity
}

export const combinedWelcomeReducers = combineReducers(welcomeReducers)

export default welcomeReducers