import { NavItemType } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  if(nav.icon2){
    var IconTwo = nav.icon2
  }
  
  return (
    <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full'>
      <Icon size={18}/>
      <p className='font-medium'>Info</p>
      {nav.icon2 && (
        <IconTwo size={18}/>
      )}
    </Link>
  )
}

export default NavItem