"use client"

import { settingsNavbarItems } from '@/data/settings'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SettingsSidebar = () => {
  const pathname = usePathname()
  const isActive = pathname.split()
  return (
      <ul className='flex flex-col'>
        {settingsNavbarItems.map((item,index) => (
            <Link href={item.path} key={index} className={cn("mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-500 hover:text-blue-500", isActive ? )}>{item.label}</Link>
        ))}
        
        {/* <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">{hash}</li> */}
      </ul>
  )
}

export default SettingsSidebar