import React from 'react'

const UserPageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full relative'>
        {children}
    </div>
  )
}

export default UserPageLayout