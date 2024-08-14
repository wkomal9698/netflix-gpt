import { useEffect } from 'react'
import { POPULAR_API_URL, API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {

    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMovies();
  },[])
}

export default usePopularMovies;