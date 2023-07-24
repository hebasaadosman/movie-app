import axios from 'axios'

const BASE_URL =
  //'https://api.themoviedb.org/3/movie/550?api_key=c847997c9711530287d073727c712246'
  'https://api.themoviedb.org/3'

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN,
}
export const FetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    })
    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
