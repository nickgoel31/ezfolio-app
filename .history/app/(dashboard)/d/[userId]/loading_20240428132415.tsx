"use client"

import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[calc(100vh-3.5rem)] flex items-center justify-center'>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 border rounded-lg border-violet-500/20 bg-background'> 
            <InfinitySpin
                width="200"
                color="#8B5CF6"
            />
        </div>
    </div>
  )
}

export default LoadingDashboard