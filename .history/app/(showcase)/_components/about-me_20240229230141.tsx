import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-full max-w-screen-md mx-auto flex items-center flex-col justify-center space-y-5'>
        <div className='space-y-1 text-center'>
            <h2 className='text-2xl font-bold'>Meet the Developer</h2>
            <p className='text-sm font-medium text-muted-foreground'>An about me section about what I do 😉</p>
        </div>

        <div className='flex w-full h-full items-center justify-center gap-3 relative'>
            <div className='flex flex-col items-center justify-center space-y-1'>
                <Avatar className='w-20 h-20'>
                    <AvatarImage src='/harsh-goel.jpg'  alt="Harsh Goel" />
                    <AvatarFallback className='text-2xl font-semibold'>H</AvatarFallback>
                </Avatar>
                <h3 className=' font-medium'>Harsh Goel</h3>
            </div>
        </div>
    </div>
  )
}

export default AboutMe