"use client"

import { BackgroundBeams } from '@/components/bg-beams'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const EzConnectHeroBanner = () => {
  return (
    <div className='w-full h-[calc(100vh-var(--navbar-height))] relative flex flex-col items-center justify-center space-y-3 overflow-x-hidden px-8 antialiased max-w-screen-lg mx-auto'>    
        {/* <BackgroundBeams /> */}
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex relative w-full"
      >
          <div className='flex-[1.5] flex flex-col gap-2 relative w-full'>
            <h1 className='font-bold text-4xl md:text-5xl leading-normal'>Connect with Developers.&nbsp;
            </h1>
            <h1><span className='bg-gradient-to-r font-bold text-4xl md:text-5xl leading-normal hero-gradient-text from-violet-500 to-indigo-500 bg-clip-text text-transparent'>EzConnect</span>&nbsp;them.</h1>
            <p className='text-muted-foreground font-medium'>Simplify your developer showcase. Create a clean, easy-to-navigate portfolio in minutes.</p>
            <div className='flex items-center gap-4 pt-5'>
                  <Link href="#features">
                    <Button variant={"outline"}>
                        Features
                    </Button>
                  </Link>

                  <Link href="register">
                    <Button className='bg-gradient-to-r from-violet-500 to-indigo-500 text-white'>
                        Showcase your Ezfolio
                    </Button>
                  </Link>
            </div>
          </div>
            <div className='flex-[1] w-full'>
            
              
            </div>
            
            
      </motion.div>
    </div>
  )
}

export default EzConnectHeroBanner