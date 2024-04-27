import { FolderGit, ThumbsUp, User, Users } from 'lucide-react'
import React from 'react'

type Props = {
    projectsCount:number
}

const AnalyticsBox = ({projectsCount}:Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
         <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Visitors</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>30</h1>
                <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    +0%
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <Users size={20}/>
                </div>
            </div>
        </div>

        <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Likes</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>16</h1>
                <div className='text-xs font-bold rounded-md bg-foreground/90 text-background p-0.5 px-1.5'>
                    +0%
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <ThumbsUp size={20}/>
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
                        projectsCount 
                    }
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-2 bg-foreground/10 text-foreground'>
                    <FolderGit size={20}/>
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