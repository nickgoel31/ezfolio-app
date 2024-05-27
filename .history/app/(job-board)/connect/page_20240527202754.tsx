import React from 'react'
import JobBoardHero from '../_components/jb-hero'
import EzConnectFilterSkills from '../_components/eco-fil-skill'

const FindJobPage = () => {
  return (
    <div className='w-full h-full px-6'>

      <div className='space-y-14 lg:px-24'>
        <JobBoardHero />
        <EzConnectFilterSkills />

        <div className='flex gap-6'>
          <div>
            Filters
          </div>

        {/* <EzConnectDevs /> */}
        </div>
        
      </div>

      

      <div className='pb-16'>
      
      </div>
    </div>
  )
}

export default FindJobPage