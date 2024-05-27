import React, { ReactNode } from 'react'
import JobBoardNavbar from './_components/jb-nav'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <nav>
            <JobBoardNavbar />
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout