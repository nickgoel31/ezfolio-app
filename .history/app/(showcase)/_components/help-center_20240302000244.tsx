import { Button } from '@/components/ui/button'
import { helpLinks } from '@/data'
import { ArrowUpRight, BookOpenIcon, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

const HelpCenter = () => {
  return (
    <div className='w-full flex flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Help Center</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Get help with Ezfolio account, products and services.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg w-full items-center gap-6'>
            {helpLinks.map((h,index) => {
                const Icon:LucideIcon | IconType = h.icon;
                return(
                    <Link href={h.url} className='border shadow-sm rounded-xl p-6 px-8 space-y-4 flex flex-col h-full items-start justify-between  border-[#131313] bg-gradient-to-tr from-[#dfd5ff07] cursor-pointer group'>
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
                            <div className='transition-scroll-nav group-hover:-translate-y-1 group-hover:translate-x-1'>
                            <ArrowUpRight className='' size={20}/>
                            </div>
                            
                        </div>
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default HelpCenter