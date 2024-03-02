import React from 'react'
import Navbar from './_components/navbar'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
        <div className='fixed top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='pt-[var(--navbar-height)]'>
            {children}
        </div>
    </div>
  )
}

export default ShowcaseLayout