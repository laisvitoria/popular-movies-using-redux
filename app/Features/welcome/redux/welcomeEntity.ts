import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Movie = {
    title: string
}

type Data = Movie[] | null

const initialState = []

export const welcome = createSlice({
    name: 'welcomeSliceEntity',
    initialState,
    reducers: {
        addData: (_, action: PayloadAction<Data>) => {
            return action.payload
        }
    }
})

// o Action creators gera as actions a partir das funções passadas para a propriedade reducers
export const { addData } = welcome.actions

export default welcome.reducer