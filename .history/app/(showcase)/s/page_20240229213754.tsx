import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'
import AboutMe from '../_components/about-me'
import HelpCenter from '../_components/help-center'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_10%,#63e_100%)]"></div>

      <HeroBanner />
      <div className='space-y-20'>
        <div>What is Ezfolio</div>
        <Features />
        <Pricing />
        <HelpCenter />
        <AboutMe />
      </div>

      <div className='mb-16 pb-16'>
    
      </div>
    </div>
  )
}

export default ShowcasePage