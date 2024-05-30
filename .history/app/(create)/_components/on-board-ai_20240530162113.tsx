import { Input } from '@/components/ui/input'
import React from 'react'

const OnBoardingAI = () => {
  return (
    <div className='w-full h-full relative'>


        {/* AI INPUT TEXT FIELD */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 p-3 bg-foreground/[0.1] w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full'/>
        </div>
    </div>
  )
}

export default OnBoardingAI