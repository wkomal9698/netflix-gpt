import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
   
    <div className='bg-black'>
       {/*
      
      MovieList - Popular
        MovieCard * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror
      
      */}
      <div className='-mt-40 relative z-20'>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Trending" movies={movies.nowPlayingMovies}/>
      <MovieList title="Horror" movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer