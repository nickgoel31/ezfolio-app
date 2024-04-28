import React from 'react'
import AdminSidebar from '../../_components/sidebar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='w-full h-full'>
        <div>
            <AdminSidebar />
        </div>
        <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
            {children}
        </div>
    </body>
  )
}

export default AdminLayout