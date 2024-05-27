import { popularSkills } from '@/data/skills'
import React from 'react'

const EzConnectFilterSkills = () => {
  return (
    <div className='flex items-center justify-center w-full '>
        <div className='flex gap-2'>
            {popularSkills.map((pop)=>(
                <div className='border '>
                    {pop}
                </div>
            ))}
        </div>
    </div>
  )
}

export default EzConnectFilterSkills