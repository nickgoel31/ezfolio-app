import React from 'react'
import AnalyticsBox from '../../_components/analytics/analytics-box'

const DashboardPage = () => {
  return (
    <div className='space-y-5'>
        <div className='flex flex-col space-y-1'>
            <h2 className='text-3xl font-semibold'>Hello, Harsh!</h2>
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
           <AnalyticsBox />
        </div>
    </div>
  )
}

export default DashboardPage