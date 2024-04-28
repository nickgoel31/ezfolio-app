"use client"

import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[calc(100vh-3.5rem)] flex items-center justify-center'>
        {/* <InfinitySpin
            width="200"
            color="#8B5CF6"
        /> */}
        <span></span>
    </div>
  )
}

export default LoadingDashboard