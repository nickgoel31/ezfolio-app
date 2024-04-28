import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='w-full h-[100vh] '>
        <InfinitySpin
            width="200"
            color="#4fa94d"
        />
    </div>
  )
}

export default LoadingDashboard