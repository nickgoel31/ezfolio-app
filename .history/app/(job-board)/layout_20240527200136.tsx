import React, { ReactNode } from 'react'
import JobBoardNavbar from './_components/jb-nav'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <div className='w-full h-[var(--navbar-height)] z-[200] '>
              <Navbar />
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout