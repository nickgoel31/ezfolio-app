import { Button } from '@/components/ui/button'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='flex flex-col gap-2 text-center'>
        <h1 className='font-bold text-5xl'>Build your&nbsp;
        <span className='bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent'>Ezfolio</span>
        &nbsp;today</h1>
        <p className='text-muted-foreground font-medium'>Simplify your developer showcase. Create a clean, easy-to-navigate portfolio in minutes.</p>
        <div className='flex items-center gap-4 justify-center pt-3'>
            <Button>
                Features
            </Button>

            <Button>
                Showcase your Ezfolio
            </Button>
        </div>
    </div>
  )
}

export default HeroBanner