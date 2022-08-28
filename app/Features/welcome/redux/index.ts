import { combineReducers } from "@reduxjs/toolkit"
import welcomeEntity, { actions as actionsWelcomeEntity }  from "./welcomeEntity"
import welcomeUI, { actions as actionsWelcomeUI } from "./welcomeUI"

export const Actions = {
    ui: actionsWelcomeUI,
    entities: actionsWelcomeEntity
} 

const welcomeReducers = {
    ui: welcomeUI,
    entities: welcomeEntity
}

export const combinedWelcomeReducers = combineReducers(welcomeReducers)

export default welcomeReducers

export interface WelcomeState {
    ui: ReturnType<typeof welcomeUI>
    entities: ReturnType<typeof welcomeEntity>
}