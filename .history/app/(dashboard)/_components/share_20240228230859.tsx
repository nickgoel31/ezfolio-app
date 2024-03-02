"use client"

import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='p-3 px-5 flex flex-col items-center'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
    </div>
  )
}

export default Share