"use client"

import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[calc(100vh-3.5rem)] flex items-center justify-center'>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
}

export default LoadingDashboard