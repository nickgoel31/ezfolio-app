import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'
import Pricing from '../_components/pricing'

const ShowcasePage = () => {
  return (
    <div className='w-full h-full '>
      <HeroBanner />
      <div>What is Ezfolio</div>
      <Features />
      <Pricing />

      <div className='mb-16 pb-16'>

      </div>
    </div>
  )
}

export default ShowcasePage