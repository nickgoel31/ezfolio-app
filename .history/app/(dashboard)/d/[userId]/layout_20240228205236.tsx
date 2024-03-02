import React from 'react'

import { redirect } from 'next/navigation';
import Sidebar from '../../_components/sidebar';
import { getCurrentUser } from '@/helpers/get-user';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';

const DashboardLayout = async ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {

    const {userId} = params;
    
    // const userDB = await getUserFromDBById(userDashboardId)
    // if(!userDB) redirect("/s");

    const user = await getCurrentUser()
    if(!user) return;

    // const userPage = await getUserpageByUserId(user.username)
    // if(!userPage) redirect("/create")

  return (
    <body>
        <div className='z-[10] w-56 hidden lg:block fixed top-0 left-0 h-full border-r bg-background'>
            <Sidebar userId={user.id} username={user.username}/>
        </div>
        {/* <div className='z-[10] block lg:hidden w-full fixed bottom-0 left-0 h-14 border-t bg-background'>
            <MobileBottomBar />
        </div> */}

        <div className='pl-0 lg:pl-56 lg:pb-0 pb-14 bg-neutral-50 dark:bg-[#070b17]'>
          <div className='py-6 lg:py-10 px-6 lg:px-8'>
            {children}
          </div>
        </div>
    </body>
  )
}

export default DashboardLayout