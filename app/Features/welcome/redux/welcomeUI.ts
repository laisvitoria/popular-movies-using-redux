import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetching: false,
    error: false
}

export const welcome = createSlice({
    name: 'welcomeSliceUI',
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
export const { actions } = welcome

export default welcome.reducer