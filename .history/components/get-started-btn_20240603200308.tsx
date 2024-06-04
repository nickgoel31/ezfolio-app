"use client"

import { useCurrentUser } from '@/hooks/useCurrentUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const GetStartedBtnNavbar = () => {
    const user = useCurrentUser()
    const pathname = usePathname()

    
  return (
    <>
    {user ? (
                    <Link href={"/d/redirect"} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                        Dashboard
                    </Link>
                ):(
                    <Link href={`/login?redirectUrl=${pathname}`} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                        Get started
                    </Link>
                )}
    </>
  )
}

export default GetStartedBtnNavbar