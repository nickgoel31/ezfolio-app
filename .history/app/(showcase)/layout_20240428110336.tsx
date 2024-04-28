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
      const end = document.documentElement.scrollHeight - window.innerHeight - 100; // Calculates the maximum scroll height
      
      if (scrollPosition > 150 && scrollPosition < end) {
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
    <body className='h-full w-full relative overflow-x-hidden'>
      {/* <div className="fixed top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,#6D28D930_0,#6D28D910_50%,rgba(0,163,255,0)_100%)]"></div> */}
        <div className='absolute top-0 left-0 w-full '>
          <div className='Announcement Bar w-full lg:h-8 text-center bg-violet-500/10 border border-violet-800/50 font-medium flex items-center justify-center text-xs text-violet-950 dark:text-violet-200'>
            We are aware of the issue where some of you are not receiving verification email! We are working on it. Thank you for your patience.
          </div>
          <div className='w-full h-[var(--navbar-height)] z-[200] '>
              <Navbar />
          </div>
        </div>
        <div ref={navbarRef} id='scroll-navbar' className='fixed bottom-4 z-[20] max-w-[420px] w-full bg-background/80 backdrop-blur-md rounded-full p-3 px-5 border border-foreground/10 opacity-0 left-1/2 -translate-x-1/2 translate-y-[100px]   delay-100 duration-700 ease-nav-in-out transition-scroll-nav'>
          <ScrollNavbar />
        </div>
        <div className='pt-[calc(var(--navbar-height)+2rem)]  w-full overflow-x-hidden'>
            {children}
            <Footer />
        </div>

    </body>
  )
}

export default ShowcaseLayout