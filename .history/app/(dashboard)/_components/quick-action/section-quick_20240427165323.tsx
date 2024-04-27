import { Project } from '@prisma/client'
import React from 'react'

const QuickActionSection = ({projects}:{projects:Project[]}) => {
  return (
    <div className='py-2 space-y-3'>
        <h3 className='font-semibold'>Manage Projects</h3>

        <div className='grid grid-cols-4 gap-4'>
            
        </div>
    </div>
  )
}

export default QuickActionSection