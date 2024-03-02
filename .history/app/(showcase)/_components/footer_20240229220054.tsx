import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  backdrop-blur-md z-[99] py-8'>
        <div className='w-full p-3 flex items-center justify-between max-w-screen-lg mx-auto'>
            <div className='flex flex-col max-w-[35%]'>
                <h4 className='font-bold text-2xl '>Ezfolio</h4>
                <p className='text-muted-foreground text-sm font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit a amet voluptas suscipit, offici.</p>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap gap-3'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer