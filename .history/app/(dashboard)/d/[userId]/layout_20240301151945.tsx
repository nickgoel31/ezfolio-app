import React from 'react'

import { redirect } from 'next/navigation';
import Sidebar from '../../_components/sidebar';
import { getCurrentUser, getUserById } from '@/helpers/get-user';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import MobileBottomBar from '../../_components/mobile-bottom-bar';
import MobileNavbar from '../../_components/mobile-navbar';
import Share from '../../_components/share';



export async function generateMetadata({ params }:{params: {userId:string}}) {
  const user = await getUserById(params.userId)
  if(!user){
    return {
      title: `No Dashboard`
    }
  }
  return {
    title: `${user.username}'s Dashboard`,
  }
}

const DashboardLayout = async ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {

    const {userId} = params;

    const user = await getCurrentUser()
    if(!user) return;

  return (
    <body>
        <div className='z-[10] fixed top-8 left-8'>
            <div>

            </div>
            {/* <Sidebar userId={user.id} username={user.username}/> */}
        </div>
        <div className='z-[10] block lg:hidden w-full fixed bottom-0 left-0 h-14 border-t bg-background'>
            <MobileBottomBar userId={user.id} username={user.username}/>
        </div>
        <div className='z-[10] block lg:hidden p-1 px-3 rounded-full border shadow-md fixed top-4 right-4 border-t bg-background'>
            <MobileNavbar username={user.username}/>
        </div>

       
        <Share username={user.username}/>
       

        <div className='pl-0  lg:pb-0 pb-14 min-h-screen bg-neutral-50 dark:bg-[#0c0c0c] w-full'>
          <div className='py-6 lg:py-14 px-6 lg:px-8 w-full max-w-screen-lg mx-auto'>
            {children}
          </div>
        </div>
    </body>
  )
}

export default DashboardLayout