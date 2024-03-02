import { navigationItems, sectionsList } from '@/data'
import React from 'react'

const ScrollNavbar = () => {
  return (
    <div className='flex gap-4 items-center justify-between'>
        {sectionsList.map((nav,index) => (
            <div>
                {nav.label}
            </div>
        ))}
    </div>
  )
}

export default ScrollNavbar