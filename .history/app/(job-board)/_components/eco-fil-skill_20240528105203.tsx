import { popularSkills } from '@/data/skills'
import Link from 'next/link'
import React from 'react'

const EzConnectFilterSkills = () => {
  return (
    <div className='flex items-center justify-center w-full '>
        <div className='flex gap-2 flex-wrap items-center text-muted-foreground'>
            <Link href={`/connect`} className='border p-1 px-3 rounded-full text-sm font-medium mb-1 cursor-pointer'>
                All
            </Link>
            {popularSkills.map((pop,index)=>(
                <Link href={`?srskque=""`} key={index} className='border p-1 px-3 rounded-full text-sm font-medium mb-1 cursor-pointer'>
                    {pop}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default EzConnectFilterSkills