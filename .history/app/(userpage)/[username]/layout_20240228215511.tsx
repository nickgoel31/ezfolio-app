import React from 'react'

export async function generateMetadata({ params }:{params: {username:string}}) {
  return {
    title: `${params.username}`,
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