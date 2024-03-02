"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const SettingsNavbar = () => {
  return (
    <div className='w-full items-center flex justify-start gap-5 text-sm font-medium text-muted-foreground'>
        <Link href={`/settings`} className={cn('underline underline-offset-4')}>
            Basic
        </Link>
        <Link href={`/settings`}>
            Userpage
        </Link>
        <Link href={`/settings`}>
            Appearance
        </Link>
        <Link href={`/settings`}>
            Danger
        </Link>
    </div>  
  )
}

export default SettingsNavbar