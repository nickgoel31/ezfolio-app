import React from 'react'
import HeroBanner from '../_components/hero-banner'
import Features from '../_components/features'

const ShowcasePage = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <HeroBanner />
      </div>
      <Features />
    </div>
  )
}

export default ShowcasePage