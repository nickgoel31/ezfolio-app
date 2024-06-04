import { getCurrentUser } from '@/helpers/get-user'
import React from 'react'

const ResumeGeneratorPage = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) {
        return(
            <div>
                <h1>Not logged in</h1>
            </div>
        )
    }
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
        <h1>Resume Generator</h1>
    </div>
  )
}

export default ResumeGeneratorPage