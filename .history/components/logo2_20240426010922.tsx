import Image from 'next/image'
import React from 'react'

const Logo2 = () => {
  return (
    <div className='font-semibold'>
      <Image src={"/logo-dark.png"} alt='logo'/>
    </div>
  )
}

export default Logo2