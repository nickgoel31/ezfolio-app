import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'
import AboutMe from '../_components/about-me'
import HelpCenter from '../_components/help-center'
import Footer from '../_components/footer'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full'>
      

      <HeroBanner />
      <div className='space-y-20'>
        <div>What is Ezfolio</div>
        <Features />
        <Pricing />
        <HelpCenter />
        <AboutMe />
      </div>

      <div className='pb-16'>
    
      </div>

      <Footer />
    </div>
  )
}

export default ShowcasePage