import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
      
        <div className='fixed top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full h-full'>
            {children}
            
        </div>

        <div>
          <Footer />
        </div>
        
    </div>
  )
}

export default ShowcaseLayout