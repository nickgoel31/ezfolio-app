"use client"

import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
        <InfinitySpin
            width="200"
            color="#8B5CF6"
        />
    </div>
  )
}

export default LoadingDashboard