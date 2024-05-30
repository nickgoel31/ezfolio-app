"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const OnBoardingAI = () => {

    const [currentSection,setCurrentSection] = useState(1);


  return (
    <div className='w-full h-full relative flex items-center justify-center'>

        {currentSection === 1 && <div className='Message 1 leading-normal text-center font-poppins'>
            <h1 className='font-semibold text-5xl leading-normal'>Hi! I'm <span className='text-violet-400'>Ez</span>Buddy</h1>
            <h1 className='font-semibold text-5xl'>Your personal Assistant</h1>
        </div>}

        <div className='Message 1 leading-normal text-center font-poppins'>
            <h1 className='font-semibold text-5xl leading-normal'>Hi! I'm <span className='text-violet-400'>Ez</span>Buddy</h1>
            <h1 className='font-semibold text-5xl'>Your personal Assistant</h1>
        </div>

        {/* AI INPUT TEXT FIELD */}
        {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2  w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full bg-foreground/[0.08]' placeholder='Type your message here...'/>
        </div> */}
    </div>
  )
}

export default OnBoardingAI