import React from 'react'
import JobBoardHero from '../_components/jb-hero'
import EzConnectFilterSkills from '../_components/eco-fil-skill'

const FindJobPage = () => {
  return (
    <div className='w-full h-full px-6'>

    <div className='space-y-28'>
      <JobBoardHero />
      <EzConnectFilterSkills />
      {/* <EzConnectDevs /> */}
      
    </div>

    

    <div className='pb-16'>
    
    </div>
    </div>
  )
}

export default FindJobPage