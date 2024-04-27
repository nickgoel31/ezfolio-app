import React from 'react'

const DashboardPage = () => {
  return (
    <div className='space-y-5'>
        <div className='flex flex-col space-y-1'>
            <h2 className='text-3xl font-semibold'>Edit Page Info</h2>
            <p className='text-muted-foreground font-medium text-sm'>
                This page is for editing the information of your page.
            </p>
        </div>

        <div className='space-y-6'>
            <BasicInfo username={user.username} pageTitle={userpage.title} pageBio={userpage.bio} pagePicUrl={userpage.pagePicUrl}/>
            <ProjectsInfo projects={projects} userPageId={userpage.id}/>
            <ExperiencesInfo exps={experiences} userPageId={userpage.id}/>
            <SkillsInfo skills={skills} userPageId={userpage.id}/>
            <SocialsInfo userPage={userpage}/>
        </div>
    </div>
  )
}

export default DashboardPage