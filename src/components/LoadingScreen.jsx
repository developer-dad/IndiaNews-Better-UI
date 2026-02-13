import React from 'react'
import Loader from './Loader'

const LoadingScreen = () => {
  return (
    <div className='absolute inset-0 z-50 bg-black bg-linear-to-r from-black via-blue-600/50 to-black h-screen w-screen flex justify-center items-center flex-col'>
        <Loader paddingY="py-2" />
        <p className='text-white text-2xl'>
            Fetching News
        </p>
    </div>
  )
}

export default LoadingScreen