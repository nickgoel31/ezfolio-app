"use client"

import { Button } from '@/components/ui/button'
import { Vortex } from '@/components/vortex'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='w-full h-[calc(100vh-var(--navbar-height))] relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8'>    
        <div className='flex flex-col gap-2 text-center'>
            <h1 className='font-bold text-5xl'>Build your&nbsp;
            <span className='bg-gradient-to-r hero-gradient-text from-violet-500 to-indigo-500 bg-clip-text text-transparent'>Ezfolio</span>
            &nbsp;today</h1>
            <p className='text-muted-foreground font-medium'>Simplify your developer showcase. Create a clean, easy-to-navigate portfolio in minutes.</p>
            <div className='flex items-center gap-4 justify-center pt-3'>
                <Button variant={"outline"}>
                    Features
                </Button>

                <Button className='bg-gradient-to-r from-violet-500 to-indigo-500 text-white'>
                    Showcase your Ezfolio
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner