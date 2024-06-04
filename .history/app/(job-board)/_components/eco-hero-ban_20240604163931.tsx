"use client"

import { BackgroundBeams } from '@/components/bg-beams'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const EzConnectHeroBanner = () => {
  return (
    <div className='w-full h-[calc(100vh-var(--navbar-height))] relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8 antialiased '>    
        {/* <BackgroundBeams /> */}
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex relative w-full h-full max-w-screen-lg mx-auto gap-14"
      >
          <div className='flex-[1.5] flex flex-col gap-2 relative w-full justify-center'>
            <h1 className='font-bold text-3xl md:text-4xl 2xl:text-5xl leading-normal'>Connect with Developers.&nbsp;
            </h1>
            <h1 className='font-bold text-3xl md:text-4xl 2xl:text-5xl leading-normal'><span className='bg-gradient-to-r font-bold leading-normal hero-gradient-text from-violet-500 to-indigo-500 bg-clip-text text-transparent'>EzConnect</span>&nbsp;them.</h1>
            <p className='text-muted-foreground font-medium'>Simplify your developer showcase. Create a clean, easy-to-navigate portfolio in minutes.</p>
            <div className='flex items-center gap-4 pt-5'>
                  <Link href="#features">
                    <Button variant={"outline"}>
                        Features
                    </Button>
                  </Link>

                  <Link href="/login?redirectUrl=/connect">
                    <Button className='bg-gradient-to-r from-violet-500 to-indigo-500 text-white'>
                        Connect with Developers
                    </Button>
                  </Link>
            </div>
          </div>
            <div className='relative flex-[1] w-full h-full'>
              <div className='absolute w-[36rem] h-[24rem] top-1/2 -translate-y-[calc(50%-4rem)] left-0 shadow-xl overflow-hidden rounded-lg z-[2]'>
              <span className='absolute bg-foreground/[0.02] top-0 left-0 w-full h-full'></span>
                <Image src={'/connect-banner-1.jpg'} alt='connect-banner-1' width={1000} height={1000} className='w-full h-full'/>
              </div>

              <div className='absolute w-[36rem] h-[20rem] top-1/2 -translate-y-[calc(50%)] left-[2rem] shadow-2xl overflow-hidden rounded-lg'>
                <span className='absolute bg-foreground/[0.04] top-0 left-0 w-full h-full'></span>
                <Image src={'/connect-banner-2.jpg'} alt='connect-banner-1' width={1000} height={1000} className='w-full h-full'/>
              </div>
              
            </div>
            
            
      </motion.div>
    </div>
  )
}

export default EzConnectHeroBanner