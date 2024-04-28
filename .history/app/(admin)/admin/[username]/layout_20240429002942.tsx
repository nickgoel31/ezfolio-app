import React from 'react'
import AdminSidebar from '../../_components/sidebar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='w-full h-full'>
        <div>
            <AdminSidebar />
        </div>
        <div className='h-screen antialiased bg-background text-foreground relative'>
            <div className='min-h-screen'>
                {children}
            </div>
        </div>
    </body>
  )
}

export default AdminLayout