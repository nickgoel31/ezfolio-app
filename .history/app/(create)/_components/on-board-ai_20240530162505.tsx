import { Input } from '@/components/ui/input'
import React from 'react'

const OnBoardingAI = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>

        <div className='Message 1 leading-normal text-center'>
            <h1 className='font-bold text-4xl leading-normal'>Hi! I'm EzBuddy</h1>
            <h1 className='font-bold text-4xl'>Your personal Assistant</h1>
        </div>

        {/* AI INPUT TEXT FIELD */}
        {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2  w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full bg-foreground/[0.08]' placeholder='Type your message here...'/>
        </div> */}
    </div>
  )
}

export default OnBoardingAI