"use client"

import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='p-3'>
        Share
    </div>
  )
}

export default Share