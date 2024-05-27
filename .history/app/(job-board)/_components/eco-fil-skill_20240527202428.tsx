import { popularSkills } from '@/data/skills'
import React from 'react'

const EzConnectFilterSkills = () => {
  return (
    <div className='flex items-center justify-center w-full '>
        {popularSkills.map((pop)=>(
            <div></div>
        ))}
    </div>
  )
}

export default EzConnectFilterSkills