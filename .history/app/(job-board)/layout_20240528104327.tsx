import React, { ReactNode } from 'react'
import JobBoardNavbar from './_components/jb-nav'
import Footer from '../(showcase)/_components/footer'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative'>
        <div className='w-full h-[var(--navbar-height)] z-[200] '>
          <JobBoardNavbar />
        </div>
        
        <div className='pt-[calc(var(--navbar-height))] lg:pt-[calc(var(--navbar-height)+2rem)]  w-full overflow-x-hidden'>
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default Layout