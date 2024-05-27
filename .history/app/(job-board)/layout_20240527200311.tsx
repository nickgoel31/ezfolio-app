import React, { ReactNode } from 'react'
import JobBoardNavbar from './_components/jb-nav'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative'>
        <div className='w-full h-[var(--navbar-height)] z-[200] '>
          <JobBoardNavbar />
        </div>
        <span className='absolute top-0 w-full h-64 bg-red-300 z-[-1]'></span>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout