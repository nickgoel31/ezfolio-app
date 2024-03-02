import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto flex items-center flex-col justify-center space-y-6'>
        <div className='space-y-1 text-center'>
            <h2 className='text-2xl font-bold'>Meet the Developer</h2>
            <p className='text-sm font-medium text-muted-foreground'>An about me section of what I do 😉</p>
        </div>

        <div className='flex w-full h-full bg-red-500'>
            <Avatar>
                <AvatarImage src='/harsh-goel.png'  alt="Harsh Goel" />
                <AvatarFallback>H</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default AboutMe