import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] px-14 absolute text-white bg-gradient-to-tr from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='m-4 text-m w-1/2'>{overview}</p>
        <div>
            <button className='py-3 px-8 bg-white m-2 rounded-md text-lg text-black hover:bg-opacity-50'>▶ Play</button>
            <button className='py-3 px-8 m-2 rounded-md bg-gray-500 text-lg text-black bg-opacity-70'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle