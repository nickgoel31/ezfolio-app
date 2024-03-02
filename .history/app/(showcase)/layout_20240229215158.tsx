import React from 'react'
import Navbar from './_components/navbar'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative overflow-x-hidden'>
        
        <div className='fixed top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full h-full'>
            {children}
            
        </div>
        
        
    </div>
  )
}

export default ShowcaseLayout