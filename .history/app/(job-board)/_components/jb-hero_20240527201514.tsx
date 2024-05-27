"use client"

import { Search, SearchCode } from 'lucide-react'
import React from 'react'

const JobBoardHero = () => {
  return (
    <div className='w-full relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8 antialiased'>
        <div className='flex space-x-8 items-center justify-center'>
            <SearchCode size={60}/>
            <div>
                <h2 className='font-bold text-3xl'>EzConnect</h2>
                <p className=''>Connect with fellow devs and make your dream project a reality!</p>
            </div>
        </div>
    </div>
  )
}

export default JobBoardHero