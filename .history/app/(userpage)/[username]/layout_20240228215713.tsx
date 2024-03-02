import React from 'react'

export async function generateMetadata({ params }:{params: {username:string}}) {
  const capitalizedUsername = params.username.charAt(0).toUpperCase() + params.username.slice(1);
  return {
    title: `${capitalizedUsername} | DevLinker`,
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