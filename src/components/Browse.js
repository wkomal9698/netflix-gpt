import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {

  // Hook to fetch Data from TMDB API and update store
  useNowPlayingMovies()
  usePopularMovies()

  return (
    <div>
      <Header></Header>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse