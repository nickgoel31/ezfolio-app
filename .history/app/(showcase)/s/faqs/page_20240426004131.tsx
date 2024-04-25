import React from 'react'

const FaqPage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <span className='absolute -top-40 left-1/2 -translate-x-1/2 w-[70%] h-96 rounded-full bg-gradient-to-t from-violet-600/5 to-indigo-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[130vh] left-[10%] w-[200px] h-80 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[200vh] left-[24%] w-[50%] h-96 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[290vh] left-1/2 -translate-x-1/2 w-[40%] h-96 rounded-full bg-gradient-to-t from-fuchsia-600/5 to-sky-500/5 blur-3xl z-[-3]' />

      <HeroBanner />
      <div className='space-y-28'>
        <Features />
        {/* <WhatIsApp /> */}
        <Pricing />
        <HelpCenter />
        <AboutMe />
      </div>

      <div className='pb-16'>
    
      </div>

      
    </div>
  )
}

export default FaqPage