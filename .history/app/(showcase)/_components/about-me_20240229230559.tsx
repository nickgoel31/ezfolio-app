import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className='w-full max-w-screen-md mx-auto flex items-center flex-col justify-center space-y-5'>
        <div className='space-y-1 text-center'>
            <h2 className='text-2xl font-bold'>Meet the Developer</h2>
            <p className='text-sm font-medium text-muted-foreground'>An about me section about what I do 😉</p>
        </div>

        <div className='flex w-full h-full items-center justify-center gap-3 relative'>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <Avatar className='w-20 h-20'>
                    <AvatarImage src='/harsh-goel.jpg'  alt="Harsh Goel" />
                    <AvatarFallback className='text-2xl font-semibold'>H</AvatarFallback>
                </Avatar>
                <div className=' text-center'>
                    <h3 className=' font-semibold'>Harsh Goel</h3>
                    <p className='text-xs font-medium text-muted-foreground'>Creator of Ezfolio</p>
                </div>

                <div className='flex items-center gap-2 justify-center w-full'>
                    <Link href={"https://www.github.com/nickgoel31"} className='opacity-60 hover:opacity-100 hover:-translate-y-1  transition ease-in-out'>
                        <FaGithub size={17}/>
                    </Link>
                    <Link href={"https://www.ezfolio.social/harshgoel"} className='opacity-60 hover:opacity-100 hover:-translate-y-1  transition ease-in-out'>
                        <FaLinkedin size={17}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe