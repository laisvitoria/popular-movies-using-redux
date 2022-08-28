import apisauce from 'apisauce'

// const ITEMS_PER_PAGE = 10
const BASE_URL = 'https://api.themoviedb.org/3/movie/157336'

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 100000
  })

  const fetchData = () => api.get('/movie')
  return {
    fetchData
  }
}

export default { create }
export type ApiType = ReturnType<typeof create>
