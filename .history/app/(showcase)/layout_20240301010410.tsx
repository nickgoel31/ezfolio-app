import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
      <div className="fixed top-0 z-[-2] h-screen w-screen rotate-180 transform bg-background bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,10%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        <div className='fixed top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full'>
            {children}
            <Footer />
        </div>

    </div>
  )
}

export default ShowcaseLayout