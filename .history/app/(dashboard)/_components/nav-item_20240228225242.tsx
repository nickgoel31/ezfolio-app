import { NavItemType } from '@/types'
import { ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  return (
    <>
      {!nav.preview ? (
        <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full'>
          <Icon size={18}/>
          <p className='font-medium'>{nav.label}</p>
        </Link>
      ):(
        <Link href={`/${username}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full'>
          <Icon size={18}/>
          <p className='font-medium'>{nav.label}</p>
          <ExternalLinkIcon size={18}/>
        </Link>
      )}
    </>
  )
}

export default NavItem