"use client"

import { Input } from '@/components/ui/input'
import React from 'react'

const ChangePassword = () => {
    const [viewPassword, setViewPassword] = React.useState(false)

  return (
    <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-lg font-bold'>Password</h3>
            <p className='text-sm font-medium text-muted-foreground'>Manage your password.</p>
            <Input className='mt-4' type={viewPassword ? 'text':'password'} value={"h.dfgdfgdom"}/>
        </div>
        <button className='text-sm font-medium text-blue-600'>Change email</button>
    </div>
  )
}

export default ChangePassword