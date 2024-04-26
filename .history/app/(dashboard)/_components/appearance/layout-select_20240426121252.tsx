"use client"

import { updateColorSchemeOnUserPage } from '@/actions/colorscheme/update-colorscheme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface Props{
    layouts:Layout[],
    currentLayout:Layout,
    userPageId:string
}
interface Layout {
    id:number,
    layoutName:string,
}

const LayoutSelect = ({layouts,currentLayout,userPageId}:Props) => {

    const [pageLayoutState, setPageLayoutState] = useState<number>(currentLayout.id)

    // useEffect(() => {
    //     updateColorSchemeOnUserPage(colorSchemeState,userPageId)
    // },[colorSchemeState,userPageId])


  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-medium'>Page Layout</h4>
               
              
            </div>
            <div className='flex flex-row flex-wrap w-full gap-4'>
                {schemes.map((scheme) => (
                    <div onClick={() => setColorSchemeState(scheme.id)} key={scheme.id} className={cn('w-28  h-28 rounded-xl flex items-center justify-center text-neutral-100 px-3 p-3 text-center cursor-pointer border',colorSchemeState === scheme.id && "outline outline-offset-2 outline-indigo-700")} style={{backgroundColor: `${scheme.firstBgColor}`, color:`${scheme.fgColor}`, background: `linear-gradient(45deg, ${scheme.firstBgColor} 0%, ${scheme.secondBgColor} 50%,${scheme.thirdBgColor} 100%)`}}>
                    <h6 className='font-medium'>{scheme.name}</h6>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default LayoutSelect