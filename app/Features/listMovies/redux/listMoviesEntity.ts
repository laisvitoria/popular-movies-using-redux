import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Movie = {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

type Data = Movie[] | null

const initialState = []

export const listMovies = createSlice({
    name: 'listMoviesSliceEntity',
    initialState,
    reducers: {
        addData: (_, action: PayloadAction<Data>) => {
            return action.payload
        }
    }
})

// o Action creators gera as actions a partir das funções passadas para a propriedade reducers
export const { actions } = listMovies

export default listMovies.reducer