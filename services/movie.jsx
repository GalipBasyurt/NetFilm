const BASE_URL = "https://api.themoviedb.org/3"

// movies
const getTopRatedMovies = async ()=>{
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await response.json()
  return data?.results
}

const getPopularMovies = async ()=>{
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await response.json()
  return data?.results
}

const getNowPlayingMovies = async ()=>{
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await response.json()
  return data?.results
}

const getUpComingMovies = async ()=>{
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await response.json()
  return data?.results
}

  
  // movies
  const topRatedMovies =  getTopRatedMovies()
  const popularMovies =  getPopularMovies()
  const playingMovies =  getNowPlayingMovies()
  const upComingMovies =  getUpComingMovies()

 export const allMovies = await Promise.all([
    topRatedMovies,
    popularMovies,
    playingMovies,
    upComingMovies
  ])

  
  // series

  const getTopRatedSeries = async ()=>{
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data?.results
  }

  const getPopularSeries = async ()=>{
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data?.results
  }

  const getPlayingSeries = async ()=>{
    const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data?.results
  }

  const getAiringTodaySeries = async ()=>{
    const response = await fetch(`${BASE_URL}/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data?.results
  }
  
  const topRatedSeries = getTopRatedSeries()
  const popularSeries = getPopularSeries()
  const playingSeries = getPlayingSeries()
  const airingTodaySeries = getAiringTodaySeries()
  
  export const allSeries = await Promise.all([
    topRatedSeries,
    popularSeries,
    playingSeries,
    airingTodaySeries
  ])