import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({photoPath}) {
  if(!photoPath) return null
  return (
    <div>
        <div className="w-36 md:w-48 pr-4">
            <img src={IMG_CDN_URL+photoPath} alt="" />
        </div>
    </div>
  )
}

export default MovieCard