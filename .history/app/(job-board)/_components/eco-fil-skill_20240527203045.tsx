import { popularSkills } from '@/data/skills'
import React from 'react'

const EzConnectFilterSkills = () => {
  return (
    <div className='flex items-center justify-center w-full '>
        <div className='flex space-x-2 space-y-4 flex-wrap items-center text-muted-foreground'>
            <div className='border p-1 px-3 rounded-full text-sm font-medium'>
                All
            </div>
            {popularSkills.map((pop)=>(
                <div className='border p-1 px-3 rounded-full text-sm font-medium'>
                    {pop}
                </div>
            ))}
        </div>
    </div>
  )
}

export default EzConnectFilterSkills