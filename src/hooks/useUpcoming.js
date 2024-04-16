import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

function useUpcoming() {
    const upcoming =useSelector(store=>store.movies.upcomingMovies)
    const dispatch=useDispatch()
      const fetchMovies=async ()=>{
        const movie=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',OPTIONS);
        const movieData= await movie.json()
        dispatch(addUpcomingMovies(movieData.results))

      }
    
      useEffect(()=>{
        !upcoming && fetchMovies()
      },[])
}

export default useUpcoming


