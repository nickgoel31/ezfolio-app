import { NavItemType } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon

  return (
    <div>
      Hello
    </div>
  )
}

export default NavItem