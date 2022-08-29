import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetching: false,
    error: false
}

export const listMovies = createSlice({
    name: 'listMoviesSliceUI',
    initialState: initialState,
    reducers: {
        request: () => ({
            fetching: true,
            error: null
        }),
        failure: () => ({
            fetching: false,
            error: true
        }),
        success: () => ({
            fetching: false,
            error: false
        })
    }
})

// o Action creators gera as actions a partir das funções passadas para a propriedade reducers
export const { actions } = listMovies

export default listMovies.reducer