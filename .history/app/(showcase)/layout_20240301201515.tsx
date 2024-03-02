import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import ScrollNavbar from './_components/scroll-navbar'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,#6D28D930_0,#6D28D910_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className='absolute top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='fixed bottom-3 z-[20]'>
          <ScrollNavbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full'>
            {children}
            <Footer />
        </div>

    </div>
  )
}

export default ShowcaseLayout