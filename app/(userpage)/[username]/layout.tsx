import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import React from 'react'

export async function generateMetadata({ params }:{params: {username:string}}) {
  const userpage = await getUserpageByUserId(params.username)
  if(!userpage){
    return {
      title: `Userpage not found`
    }
  }
  return {
    title: `${userpage.title} `,
  }
}

const UserPageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full relative'>
        {children}
    </div>
  )
}

export default UserPageLayout