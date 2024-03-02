"use client"

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import ScrollNavbar from './_components/scroll-navbar'


const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  const navbarRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 100) {
        navbarRef.current?.classList.add('opacity-100','translate-y-0')
        navbarRef.current?.classList.remove('opacity-0','translate-y-[100px]')
      } else {
        navbarRef.current?.classList.remove('opacity-100','translate-y-0')
        navbarRef.current?.classList.add('opacity-0','translate-y-[100px]')
      }
    };

   
      window.addEventListener('scroll', handleScroll);
    
  }, []);

  return (
    <body className='h-full w-full relative'>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,#6D28D930_0,#6D28D910_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className='absolute top-0 left-0 w-full h-[var(--navbar-height)] z-[10]'>
            <Navbar />
        </div>
        <div ref={navbarRef} id='scroll-navbar' className='fixed bottom-4 z-[20] max-w-[420px] w-full bg-background/80 backdrop-blur-md rounded-full p-3 px-5 border border-foreground/10 opacity-0 left-1/2 -translate-x-1/2 translate-y-[100px]  transition-all delay-300 duration-700 '>
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