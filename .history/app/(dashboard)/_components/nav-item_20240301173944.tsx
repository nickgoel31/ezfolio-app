"use client"

import { NavItemType } from '@/types'
import { ExternalLinkIcon, Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const NavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  return (
    <>
      {!nav.preview ? (
        <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
          <p className='font-medium'>{nav.label}</p>
        </Link>
      ):(
        <Link href={`/${username}`} target='_blank' className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
          <p className='font-medium'>{nav.label}</p>
          <ExternalLinkIcon size={18}/>
        </Link>
      )}
    </>
  )
}



export const UpdatedNavItems = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  return(
    <>
      {!nav.preview ? (
        <>
          <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center group relative'>
            <Icon size={18}/>
            <p className='group-hover:block hidden absolute translate-x-full'>{nav.label}</p>
          </Link>
          
        </>
      ):(
        <Link href={`/${username}`} target='_blank' className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center '>
          <Icon size={18}/>
          
          <ExternalLinkIcon size={18}/>
        </Link>
      )}
    </>
  )
}