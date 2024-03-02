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
    <div className='w-full h-full'>
      <span className='absolute -top-40 left-1/2 -translate-x-1/2 w-[70%] h-96 rounded-full bg-gradient-to-t from-violet-600/10 to-indigo-500/10 blur-3xl' />

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