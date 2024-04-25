import React from 'react'
import HeroBanner from '../../_components/hero-banner'
import Features from '../../_components/features'
import Pricing from '../../_components/pricing'
import AboutMe from '../../_components/about-me'
import HelpCenter from '../../_components/help-center'
import WhatIsApp from '../../_components/what-is-ezfolio'
import FaqSection from '../../_components/faqsection'

const FaqPage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      

      <FaqSection />
      <div className='space-y-28'>
        <AboutMe />
      </div>

      <div className='pb-16'>
    
      </div>

      
    </div>
  )
}

export default FaqPage