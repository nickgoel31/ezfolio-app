import React from 'react'
import JobBoardHero from '../_components/jb-hero'
import EzConnectFilterSkills from '../_components/eco-fil-skill'
import EzConnectDevs from '../_components/ez-con-devs'
import EzConnectHeroBanner from '../_components/eco-hero-ban'
import Features from '@/app/(showcase)/_components/features'

const EzConnectPage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>

      <EzConnectHeroBanner />
      <div className='space-y-28'>
        <Features />
        {/* <WhatIsApp /> */}
        {/* <Pricing />
        <HelpCenter />
        <AboutMe /> */}
      </div>

      <div className='pb-16'>
    
      </div>

      
    </div>
  )
}

export default EzConnectPage