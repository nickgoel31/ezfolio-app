"use client"

import { UserPage } from '@prisma/client'
import { FolderGit, ThumbsUp, User, Users } from 'lucide-react'
import React from 'react'
import { CardBody, CardContainer, CardItem }from '@/components/3d-card' 

type Props = {
    projectsCount:number
    userPage:UserPage
}

const AnalyticsBox = ({projectsCount,userPage}:Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
         <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Page Views</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>{userPage.pageViews}</h1>
                {/* <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    +0%
                </div> */}

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <Users size={20}/>
                </div>
            </div>
        </div>

        <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Projects</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>{projectsCount}</h1>
                <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    {
                        projectsCount > 0 ? `Newbie`: projectsCount > 5 ? `Intermediate`: `Professional`
                    }
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <FolderGit size={20}/>
                </div>
            </div>
        </div>

        <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='absolute w-full h-full flex flex-col items-center justify-center top-0 left-0 bg-background/40 backdrop-blur-md rounded-xl z-[2]'>
                <h4 className='font-semibold'>Page Likes</h4>
                <p className='text-xs font-medium text-muted-foreground'>Coming Soon!</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Likes</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>{userPage.pageLikes}</h1>
                {/* <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    +0%
                </div> */}

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <ThumbsUp size={20}/>
                </div>
            </div>
        </div>

        <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='absolute w-full h-full flex flex-col items-center justify-center top-0 left-0 bg-background/40 backdrop-blur-md rounded-xl z-[2]'>
                <h4 className='font-semibold'>Requests</h4>
                <p className='text-xs font-medium text-muted-foreground'>Coming Soon!</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Requests</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>4</h1>
                <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    +32%
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <Users size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsBox