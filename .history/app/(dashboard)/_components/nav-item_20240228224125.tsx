import { NavItemType } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  return (
    <Link href={`${nav.pathname}/${}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full'>
      <Icon size={18}/>
      <p className='font-medium'>Info</p>
    </Link>
  )
}

export default NavItem