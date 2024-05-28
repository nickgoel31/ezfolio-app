"use client"

import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { InfinitySpin, RotatingSquare } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='space-y-5 overflow-hidden relative'>
      <div className='fixed z-[200] flex items-center justify-center bg-background/40 w-screen h-screen top-0 left-0 backdrop-blur-xl'>
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#8B5CF6"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>
    </div>
  )
}

export default Loading