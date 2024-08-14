import { useEffect } from 'react'
import { NOW_PLAYING_API_URL, API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {

    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;