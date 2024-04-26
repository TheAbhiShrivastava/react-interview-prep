import React from 'react'
import Debouncing from '../01-debouncing/Debouncing'
import AbortControllerDemo from '../02-abort-controller/AbortControllerDemo'

const Homepage = () => {


  return (
    <div className="homepage-container flex justify-center bg-slate-300 h-screen">
        <Debouncing />
        <AbortControllerDemo />
    </div>
  )
}

export default Homepage