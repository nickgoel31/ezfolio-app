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
        <Link href={`${nav.pathname}/${userId}${nav.href}`} className='relative rounded p-2 hover:bg-foreground/10 transition flex gap-3 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
          <p className='absolute left-0 translate-x-[calc(5vw)] font-medium text-sm p-1 px-2 rounded-md bg-violet-950/10 border text-violet-200 group-hover:block hidden'>{nav.label}</p>
        </Link>
      ):(
        <Link href={`/${username}`} target='_blank' className='relative rounded p-2 hover:bg-foreground/10 transition flex gap-3 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
            <p className='absolute left-0 translate-x-[calc(5vw)] font-medium text-sm p-1 px-2 rounded-md bg-violet-950/10 border flex items-center gap-2 text-violet-200 group-hover:flex hidden'>{nav.label}
            <ExternalLinkIcon size={18}/>
          </p>
          
        </Link>
      )}
    </>
  )
}

export const MobileNavItem = ({nav, userId,username}:{nav:NavItemType, userId:string,username:string}) => {
  const Icon = nav.icon
  return (
    <>
      {!nav.preview ? (
        <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-3 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
          {/* <p className='font-medium text-sm'>{nav.label}</p> */}
        </Link>
      ):(
        <Link href={`/${username}`} target='_blank' className='rounded p-2 hover:bg-foreground/10 transition flex gap-3 items-center w-full justify-center lg:justify-start text-sm lg:text-base'>
          <Icon size={18}/>
          {/* <p className='font-medium text-sm'>{nav.label}</p> */}
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
        <Link href={`${nav.pathname}/${userId}${nav.href}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center '>
          <Icon size={18}/>
          
        </Link>
      ):(
        <Link href={`/${username}`} target='_blank' className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full justify-center '>
          <Icon size={18}/>
          
          <ExternalLinkIcon size={18}/>
        </Link>
      )}
    </>
  )
}