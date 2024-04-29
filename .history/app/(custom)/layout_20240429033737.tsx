import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const CustomThemeEditor = async ({children}:{children:React.ReactNode}) => {

  return (
    <div>{children}</div>
  )
}

export default CustomThemeEditor