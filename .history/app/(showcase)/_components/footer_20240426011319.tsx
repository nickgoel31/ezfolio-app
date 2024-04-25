import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  backdrop-blur-md z-[99] py-8'>
        <div className='w-full p-3 flex flex-col lg:flex-row items-center justify-between max-w-screen-lg mx-auto gap-7'>
            <div className='flex flex-col lg:max-w-[35%]'>
                <h4 className='font-bold text-2xl '>Ezfolio</h4>
                <p className='text-muted-foreground text-sm font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit a amet voluptas suscipit, offici.</p>
            </div>
            <div className='flex flex-row flex-wrap gap-7 font-medium text-sm'>
                <Link href={"/"} className='hover:text-violet-300 transition'>Home</Link>
                <Link href={"/s#features"} className='hover:text-violet-300 transition'>Features</Link>
                <Link href={"/s#pricing"} className='hover:text-violet-300 transition'>Pricing</Link>
                <Link href={"/s/faqs"} className='hover:text-violet-300 transition'>What is Ezfolio?</Link>
                <Link href={"/"} className='hover:text-violet-300 transition'>Help Center</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer