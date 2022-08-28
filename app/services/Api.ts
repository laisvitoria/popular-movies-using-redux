import apisauce from 'apisauce'

// const ITEMS_PER_PAGE = 10
import { BASE_URL, key } from '../config/env.js'

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 100000
  })

  console.log(BASE_URL)
  const getToken = () => api.get(`/authentication/token/new?api_key=${key}`)
  const fetchData = () => api.get(`/movie/popular?api_key=${key}`)
  return {
    fetchData
  }
}

export default { create }
export type ApiType = ReturnType<typeof create>
