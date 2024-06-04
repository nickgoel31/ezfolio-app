import { getCurrentUser } from '@/helpers/get-user'
import React from 'react'

const ResumeGeneratorPage = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser){}
  return (
    <div>

    </div>
  )
}

export default ResumeGeneratorPage