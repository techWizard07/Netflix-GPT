import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {language} from '../utils/langConstants'
import openai from '../utils/openai'
import { OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

function GptSearchBar() {
  const lang=useSelector(store=>store.config.lang)
  const searchText=useRef(null)
  const dispatch=useDispatch()

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',OPTIONS)
    const json=await data.json()
    return json.results;
  }

  const alaisGptResults=async()=>{
    const results=["Hera Pheri" , "3 Idiots", "Golmaal: Fun Unlimited", "Bhoot", "Chupke Chupke"]
   const promiseArray=results.map(movie=>searchMovieTMDB(movie))
   const tmdbResults=await Promise.all(promiseArray)
    dispatch(addGptMovieResult({movieName:results,movieDetails:tmdbResults}))
  }

  // const handleGptSearch=async()=>{
  //   // console.log(searchText.current.value)

  //   // const gptQuery=`Act as a movie recommadation system and suggest some movies for the query ${searchText.current.value}. Only give me the name of 5 movie, comma seperated like the example results given ahead. Example : Don, Vada chennai, Dia, Romio Juliet, Titanic`

  //   // const gptResult=await openai.chat.completions.create({
  //   //   messages: [{ role: 'user', content: gptQuery }],
  //   //   model: 'gpt-3.5-turbo',
  //   // });
  //   // // console.log(gptResult.choices[0]?.message?.content)
  //   // const gptMovie=gptResult.choices[0]?.message?.content.split(",")
  //   // const promiseArray=gptMovie.map(movie=>searchMovieTMDB(movie))
  //   // const tmdbResults=Promise.all(promiseArray)
  //   // dispatch(addGptMovies(tmdbResults))
  // }
  return (
    <div className='pt-[60%] md:pt-[10%] flex justify-center '>
        <form action="" className=" w-full md:w-1/2 grid grid-cols-12 bg-black" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className=" p-4 m-4 col-span-9 text-sm md:text-xl" placeholder={language[lang].placeholder} />
            <button className="py-2 px-2 md:px-4 bg-red-700 text-white rounded-md col-span-3 text-sm md:text-xl m-4" onClick={alaisGptResults}>{language[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar