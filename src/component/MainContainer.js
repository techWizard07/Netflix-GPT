import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies) return
    const movieData=movies[1];
    const{title,overview,id}=movieData
   
  return (
    <div className='bg-black pt-[50%] md:p-0'>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
} 

export default MainContainer