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
      <span className='absolute -top-40 left-1/2 -translate-x-1/2 w-[70%] h-96 rounded-full bg-gradient-to-t from-violet-600/5 to-indigo-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[30vh] left-[10%] w-[200px] h-80 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[100vh] left-[24%] w-[50%] h-96 rounded-full bg-gradient-to-t from-purple-600/5 to-blue-500/5 blur-3xl z-[-3]' />
      <span className='absolute top-[120vh] left-1/2 -translate-x-1/2 w-[40%] h-96 rounded-full bg-gradient-to-t from-fuchsia-600/5 to-sky-500/5 blur-3xl z-[-3]' />

      <FaqSection />
      <div className='space-y-28'>
        <Features
      </div>

      <div className='pb-16'>
    
      </div>

      
    </div>
  )
}

export default FaqPage