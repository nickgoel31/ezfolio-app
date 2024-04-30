import { Button } from '@/components/ui/button'
import { helpLinks } from '@/data'
import { ArrowUpRight, BookOpenIcon, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

const HelpCenter = () => {
  return (
    <div id='help' className='w-full flex flex-col items-center space-y-7 bg-red-500'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Help Center</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Get help with Ezfolio account, products and services.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center max-w-screen-lg mx-auto  w-full gap-6 px-4 lg:px-0'>
            {helpLinks.map((h,index) => {
                const Icon:LucideIcon | IconType = h.icon;
                return(
                    <div key={index} className='h-[260px] p-[1px] w-[350px] relative rounded-xl  group'>
                        {/* BORDER */}
                        <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#e5e5e5] dark:bg-[#131313] overflow-hidden z-[-1]'>
                            <div className='group-hover:opacity-100 opacity-0 help-center-card-border absolute w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-transparent to-foreground/40 dark:to-foreground/30 top-[-50%] left-[-50%] transition-scroll-nav '>

                            </div>
                        </div>

                        {/* MAIN CONTENT */}
                        <Link href={h.url} className='rounded-xl shadow-lg p-6 px-8 space-y-4 flex flex-col h-full items-start justify-between   bg-gradient-to-tr from-[#f2f2f3] to-[#fefeff] dark:from-[#0d0d10] dark:to-[#09090b] cursor-pointer group'>
                            <div className='space-y-4 flex flex-col items-start'>
                                <div className='text-muted-foreground flex justify-center p-3 rounded-full bg-neutral-900 items-center'>
                                    <Icon size={25} />
                                </div>
                                <div className='space-y-1'>
                                    <h4 className='text-xl font-semibold'>{h.label}</h4>
                                    <p className='text-sm font-medium text-muted-foreground'>{h.desc}</p>
                                </div>
                            </div>
                            
                            <div  className='flex items-center w-full justify-between text-sm font-medium py-2 px-2 transition rounded'>
                                {h.btnLabel}
                                <div className='transition-scroll-nav group-hover:-translate-y-1 group-hover:translate-x-1 delay-100'>
                                <ArrowUpRight className='' size={20}/>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default HelpCenter