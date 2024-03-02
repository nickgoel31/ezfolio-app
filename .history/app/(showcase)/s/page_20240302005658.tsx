import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'
import AboutMe from '../_components/about-me'
import HelpCenter from '../_components/help-center'
import Footer from '../_components/footer'
import WhatIsApp from '../_components/what-is-ezfolio'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <span className='absolute -top-40 left-1/2 -translate-x-1/2 w-[70%] h-96 rounded-full bg-gradient-to-t from-violet-600/5 to-indigo-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[80vh] left-[80%] w-96 h-96 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[130vh] left-[10%] w-[200px] h-80 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[130vh] left-[10%] w-[200px] h-80 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />

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

export default ShowcasePage