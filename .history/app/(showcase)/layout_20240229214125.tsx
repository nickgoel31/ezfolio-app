import React from 'react'
import Navbar from './_components/navbar'
import { Footer } from 'react-day-picker'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative overflow-x-hidden'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6D28D940_100%)]"></div>
        <div className='fixed top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full h-full'>
            {children}
        </div>
        <div className=''>
          <Footer />
        </div>
    </div>
  )
}

export default ShowcaseLayout