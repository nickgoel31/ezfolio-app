"use client"

import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='space-y-5'>
        <div className='flex flex-col space-y-1'>
            <Skeleton className='w-[200px] h-8'/>
            <Skeleton className='w-[400px] h-5'/>
        </div>

        <div className='space-y-6'>
            {/* <BasicInfo username={user.username} pageTitle={userpage.title} pageBio={userpage.bio} pagePicUrl={userpage.pagePicUrl}/>
            <ProjectsInfo projects={projects} userPageId={userpage.id}/>
            <ExperiencesInfo exps={experiences} userPageId={userpage.id}/>
            <SkillsInfo skills={skills} userPageId={userpage.id}/>
            <SocialsInfo userPage={userpage}/> */}

           <Skeleton className='w-full h-48'/>
           <Skeleton className='w-full h-48'/>
        </div>
    </div>
  )
}

export default LoadingDashboard