import apisauce from 'apisauce'

// const ITEMS_PER_PAGE = 10
import { BASE_URL, key } from '../config/env.js'

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 100000
  })

  const getToken = () => api.get(`/authentication/token/new?api_key=${key}`)
  const getPopularMovies = () => api.get(`/movie/popular?api_key=${key}`)
  const getTopRatedMovies = () => api.get(`/movie/top_rated?api_key=${key}`)
  const getMovieDetails = (id: number) => api.get(`/movie/${id}?api_key=${key}`)

  return {
    getToken,
    getPopularMovies,
    getMovieDetails,
    getTopRatedMovies
  }
}

export default { create }
export type ApiType = ReturnType<typeof create>
