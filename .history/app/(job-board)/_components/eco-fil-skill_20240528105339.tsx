"use client"

import { popularSkills } from '@/data/skills'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const EzConnectFilterSkills = () => {
    const searchParams = useSearchParams()
    const 
  return (
    <div className='flex items-center justify-center w-full '>
        <div className='flex gap-2 flex-wrap items-center text-muted-foreground'>
            <Link href={`/connect`} className='border p-1 px-3 rounded-full text-sm font-medium mb-1 cursor-pointer'>
                All
            </Link>
            {popularSkills.map((pop,index)=>(
                <Link href={`?srskque="${pop}"`} key={index} className='border p-1 px-3 rounded-full text-sm font-medium mb-1 cursor-pointer'>
                    {pop}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default EzConnectFilterSkills