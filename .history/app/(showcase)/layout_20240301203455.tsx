"use client"

import React, { useEffect, useRef } from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import ScrollNavbar from './_components/scroll-navbar'


const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  const body = useRef<HTMLBodyElement>(null)
  
  useEffect(() => {
    body.current?.addEventListener("scroll",()=>{
      console.log('scroll')
    })
  },[])

  return (
    <body className='h-full w-full relative' ref={body}>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,#6D28D930_0,#6D28D910_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className='absolute top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div className='fixed bottom-4 z-[20] max-w-[420px] w-full bg-background/80 backdrop-blur-md rounded-full p-3 px-5 border border-foreground/10 left-1/2 -translate-x-1/2 translate-y-[10px] opacity-0 hover:opacity-100 hover:translate-y-0 transition duration-300 delay-200'>
          <ScrollNavbar />
        </div>
        <div className='pt-[var(--navbar-height)] w-full'>
            {children}
            <Footer />
        </div>

    </body>
  )
}

export default ShowcaseLayout