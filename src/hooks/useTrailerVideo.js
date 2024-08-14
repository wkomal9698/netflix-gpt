
import React, { useEffect } from 'react'
import { MOVIE_VIDEOS_API_URL_1, MOVIE_VIDEOS_API_URL_2, API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from '../utils/moviesSlice'

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch()

  // Fetch trailer video and update the store with trailer video data

    const fetchMovieVideos = async () => {
        const data = await fetch(MOVIE_VIDEOS_API_URL_1 + movieId +MOVIE_VIDEOS_API_URL_2, API_OPTIONS)
        const json = await data.json()
    
        const filteredTrailers = json.results.filter((video) => video.type === "Trailer" && video.name === "Official Trailer")
        const trailer = filteredTrailers.length ? filteredTrailers[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
      }
    
      useEffect(() => {
        fetchMovieVideos()
      }, [])
}

export default useTrailerVideo