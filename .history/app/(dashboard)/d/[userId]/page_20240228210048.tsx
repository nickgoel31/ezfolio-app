import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import { getProjectByUserPageId } from '@/helpers/get-project'
import { getCurrentUser, getUserById } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'
import BasicInfo from '../../_components/basic-info'
import ProjectsInfo from '../../_components/projects-info'

const UserPageDashboard = async ({params}:{params:{userId:string}}) => {
    const user = await getUserById(params.userId)
    if(!user) return;
    const currentUser = await getCurrentUser()
    if(!currentUser) redirect("/login")

    if(user.id !== currentUser.id){
        redirect("/d/redirect")
    }
    const userpage = await getUserpageByUserId(user.username)
    if(!userpage) {
        redirect("/create")
    }

    const projects = await getProjectByUserPageId(userpage.id)

  return (
    <div className='space-y-5'>
        <div className='flex flex-col space-y-1'>
            <h2 className='text-3xl font-semibold'>Edit Page Info</h2>
            <p className='text-muted-foreground font-medium text-sm'>
                This page is for editing the information of your page.
            </p>
        </div>

        <div className='space-y-6'>
            <BasicInfo username={user.username} pageTitle={userpage.title} pageBio={userpage.bio}/>
            <ProjectsInfo projects={projects} userPageId={userpage.id}/>
            {/* <ExperiencesInfo exps={experiences} userPageId={userPage.id}/> */}
            {/* <SkillsInfo skills={skills} userPageId={userPage.id}/> */}
            {/* <SocialsInfo userPage={userPage}/> */}
        </div>
    </div>
  )
}

export default UserPageDashboard