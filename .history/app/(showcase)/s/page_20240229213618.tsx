import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'
import AboutMe from '../_components/about-me'
import HelpCenter from '../_components/help-center'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

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