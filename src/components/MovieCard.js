import React from 'react'
import { MOVIE_IMAGE_URL } from '../utils/constants'

const MovieCard = ({title, poster_path}) => {
    console.log("In MovieCard:: ", poster_path)
  return (
    <div className="w-48 p-1 shadow-2xl">
        <img src={MOVIE_IMAGE_URL+poster_path} alt={title + " poster image"}/>
    </div>
  )
}

export default MovieCard