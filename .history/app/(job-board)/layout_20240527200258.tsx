import React, { ReactNode } from 'react'
import JobBoardNavbar from './_components/jb-nav'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative'>
        <div className='w-full h-[var(--navbar-height)] z-[200] '>
          <JobBoardNavbar />
        </div>
        <span className='absolute '></span>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout