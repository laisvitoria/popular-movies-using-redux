import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null

export const welcome = createSlice({
    name: 'welcomeSliceEntity',
    initialState,
    reducers: {
        addToken: (_, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

// o Action creators gera as actions a partir das funções passadas para a propriedade reducers
export const { actions } = welcome

export default welcome.reducer