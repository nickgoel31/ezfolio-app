import React, { ReactNode } from 'react'

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