"use client"

import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { InfinitySpin, RotatingSquare } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='space-y-5 overflow-hidden relative'>
      <div className='fixed z-[200] flex items-center justify-center bg-background/40 w-screen h-screen top-0 left-0 backdrop-blur-xl'>
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#8B5CF6"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>
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
           <Skeleton className='w-full h-48'/>
           <Skeleton className='w-full h-48'/>
        </div>
    </div>
  )
}

export default LoadingDashboard