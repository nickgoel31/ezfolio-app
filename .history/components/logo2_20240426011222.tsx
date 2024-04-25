import Image from 'next/image'
import React from 'react'

const Logo2 = () => {
  return (
    <div className='w-12 h-6'>
      <Image src={"/logo-dark.png"} className='w-10' alt='logo' width={1000} height={1000}/>
    </div>
  )
}

export default Logo2