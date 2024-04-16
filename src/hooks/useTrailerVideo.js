import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import {OPTIONS} from '../utils/constants'

const useTrailerVideo = (movieId) => {
  const trailer=useSelector(store=>store.movies.trailerVideo)
    const dispatch=useDispatch();
    const getTrailer=async ()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, OPTIONS);
      const json=await data.json();
      const trailerData=json.results.filter((video)=>video.type==="Trailer")
      const trailer=trailerData.length ? trailerData[0] : json.results[0]
      // console.log(trailer.key)
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(()=>{
      !trailer && getTrailer()
    },[])
}

export default useTrailerVideo