import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

function GptSearchPage() {
  return (
    <>
       <div className="fixed -z-10">
      <img src={BG_URL} alt="logo" className='h-screen object-cover opacity-80 md:h-auto md:opacity-100'/>
      </div>
     <GptSearchBar/>
     <GptMovieSuggestion/>
    </>
  )
}

export default GptSearchPage