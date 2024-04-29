import { getCurrentUser } from '@/helpers/get-user'
import React from 'react'

const CustomThemeEditor = async ({children}:{children:React.ReactNode}) => {
  const user = await getCurrentUser()
  if(!user) redirect("/s")
  return (
    <div>{children}</div>
  )
}

export default CustomThemeEditor