"use client"

import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

const JobBoardHero = () => {
  return (
    <div className='w-full relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8 antialiased'>
        <div className='flex space-x-4'>
            <Magnifyi />
        </div>
    </div>
  )
}

export default JobBoardHero