import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className="w-screen aspect-video md:pt-[20%] px-6 pt-48 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 md:p-4 px-6 md:px-12 text-md md:text-xl  rounded-lg hover:bg-opacity-80"> Play</button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-4"> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle