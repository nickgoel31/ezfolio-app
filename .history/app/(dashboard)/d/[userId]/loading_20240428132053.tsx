"use client"

import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[100vh] flex items-center jus'>
        <InfinitySpin
            width="200"
            color="#8B5CF6"
        />
    </div>
  )
}

export default LoadingDashboard