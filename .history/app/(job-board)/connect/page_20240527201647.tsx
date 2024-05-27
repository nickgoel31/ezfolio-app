import React from 'react'
import JobBoardHero from '../_components/jb-hero'

const FindJobPage = () => {
  return (
    <div className='w-full h-full px-6'>

    <JobBoardHero />

    <EzConnectFilterSkills />
    
    <EzConnectDevs />

    <div className='pb-16'>
    
    </div>
    </div>
  )
}

export default FindJobPage