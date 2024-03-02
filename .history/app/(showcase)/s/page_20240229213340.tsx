import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'
import AboutMe from '../_components/about-me'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full '>
      <HeroBanner />
      <div className='space-y-20'>
        <div>What is Ezfolio</div>
        <Features />
        <Pricing />
        <AboutMe />
      </div>

      <div className='mb-16 pb-16'>
    
      </div>
    </div>
  )
}

export default ShowcasePage