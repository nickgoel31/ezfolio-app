"use client"

import { settingsNavbarItems } from '@/data/settings'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const SettingsSidebar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  return (
      <ul className='flex flex-col'>
        {settingsNavbarItems.map((item,index) => (
            <Link href={`${pathname}?section=${item.path}`} key={index} className={cn("mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-500 hover:text-blue-500", hash === item.path ? "border-l-blue-500 text-blue-500" : "")}>{item.label}</Link>
        ))}
        
        {/* <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">{hash}</li> */}
      </ul>
  )
}

export default SettingsSidebar