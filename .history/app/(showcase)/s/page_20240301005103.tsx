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
      

      <HeroBanner />
      <div className='space-y-20'>
      <Features />
        <WhatIsApp />
        
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