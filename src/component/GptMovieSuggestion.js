import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
function GptMovieSuggestion() {
  
  const {movieResults,movieNames}=useSelector(store=>store.gpt);
  // console.log(movieResults,movieNames)
  if(!movieResults) return null
  return (
    <div className='p-4 m-4 bg-black opacity-80 text-white'>
     {movieNames.map((movie,index)=><MovieList key= {movie} title={movie} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestion