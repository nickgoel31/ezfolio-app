import Image from 'next/image'
import React from 'react'

const Logo2 = () => {
  return (
    <div className='w-14 '>
      <Image src={"/logo-dark.png"} alt='logo' width={1000} height={1000}/>
    </div>
  )
}

export default Logo2