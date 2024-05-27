"use client"

import { Search, SearchCode } from 'lucide-react'
import React from 'react'

const JobBoardHero = () => {
  return (
    <div className='w-full relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8 antialiased'>
        <div className='flex space-x-4'>
            <SearchCode />
        </div>
    </div>
  )
}

export default JobBoardHero