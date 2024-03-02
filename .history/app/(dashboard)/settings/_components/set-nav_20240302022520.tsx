"use client"

import { settingsNavbarItems } from '@/data/settings'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SettingsNavbar = () => {
    const pathname = usePathname()
    

  return (
    <div className='w-full items-center flex justify-start gap-5 text-sm font-medium text-muted-foreground'>
        {settingsNavbarItems.map((item, index) => (
            <Link href={item.path} className={cn('underline underline-offset-4')}>
                {item.label}
            </Link>
        ))}
    </div>  
  )
}

export default SettingsNavbar