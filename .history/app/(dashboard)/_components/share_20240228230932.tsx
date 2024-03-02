"use client"

import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='p-3 px-5 flex flex-col items-center'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
        <div className='rounded w-full border bg-foreground/5 p-1'>

        </div>
    </div>
  )
}

export default Share