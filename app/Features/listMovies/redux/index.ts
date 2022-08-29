import { combineReducers } from "@reduxjs/toolkit"
import listMoviesEntity, { actions as actionsListMoviesEntity }  from "./listMoviesEntity"
import listMoviesUI, { actions as actionsListMoviesUI } from "./listMoviesUI"

export const Actions = {
    ui: actionsListMoviesUI,
    entities: actionsListMoviesEntity
} 

const listMoviesReducers = {
    ui: listMoviesUI,
    entities: listMoviesEntity
}

export const combinedListMoviesReducers = combineReducers(listMoviesReducers)

export default listMoviesReducers

export interface ListMoviesState {
    ui: ReturnType<typeof listMoviesUI>
    entities: ReturnType<typeof listMoviesEntity>
}