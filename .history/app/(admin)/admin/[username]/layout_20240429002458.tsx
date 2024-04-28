import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='w-full h-full'>
        <div>

        </div>
        <div>{children}</div>
    </body>
  )
}

export default AdminLayout