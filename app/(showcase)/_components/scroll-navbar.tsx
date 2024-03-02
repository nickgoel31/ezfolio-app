"use client"

import { navigationItems, sectionsList } from '@/data'
import Link from 'next/link'
import React from 'react'

const ScrollNavbar = () => {
  return (
    <div className='flex gap-6 items-center justify-between '>
        {sectionsList.map((nav,index) => (
            <Link key={index} href={nav.href} className='text-sm font-medium hover:text-violet-400 transition'>
                {nav.label}
            </Link>
        ))}
    </div>
  )
}

export default ScrollNavbar