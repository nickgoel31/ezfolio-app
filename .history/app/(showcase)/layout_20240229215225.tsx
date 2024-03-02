import React from 'react'
import Navbar from './_components/navbar'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
        
        <div className='pt-[var(--navbar-height)] w-full h-full'>
            {children}
        </div>

    </div>
  )
}

export default ShowcaseLayout