import React from 'react'

const HeroBanner = () => {
  return (
    <div className='flex flex-col gap-2 text-center'>
        <h1 className='font-bold text-5xl'>Build your&nbsp;
        <span className='bg-gradient-to-r from-violet-500 to-indigo-500 '>Ezfolio</span>
        &nbsp;today</h1>
        <p className='text-muted-foreground font-medium'>Simplify your developer showcase. Create a clean, easy-to-navigate portfolio in minutes.</p>
    </div>
  )
}

export default HeroBanner