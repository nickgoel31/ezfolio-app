import { navigationItems, sectionsList } from '@/data'
import Link from 'next/link'
import React from 'react'

const ScrollNavbar = () => {
  return (
    <div className='flex gap-4 items-center justify-between'>
        {sectionsList.map((nav,index) => (
            <Link key={index} href={nav.href} className=''>
                {nav.label}
            </Link>
        ))}
    </div>
  )
}

export default ScrollNavbar