"use client"

import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingDashboard = () => {
  return (
    <div className='space-y-5'>
        <div className='flex flex-col space-y-1'>
            <h2 className='text-3xl font-semibold'>Hello, {userpage.title.split(" ")[0]}!</h2>
            <p className='text-muted-foreground font-medium text-sm'>
                Here you can manage your page and view your stats.
            </p>
        </div>

        <div className='space-y-6'>
            {/* <BasicInfo username={user.username} pageTitle={userpage.title} pageBio={userpage.bio} pagePicUrl={userpage.pagePicUrl}/>
            <ProjectsInfo projects={projects} userPageId={userpage.id}/>
            <ExperiencesInfo exps={experiences} userPageId={userpage.id}/>
            <SkillsInfo skills={skills} userPageId={userpage.id}/>
            <SocialsInfo userPage={userpage}/> */}
           <AnalyticsBox projectsCount={projectsCount} userPage={userpage}/>
           <QuickActionSection projects={projects}/>
        </div>
    </div>
  )
}

export default LoadingDashboard