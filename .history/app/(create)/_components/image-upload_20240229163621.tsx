"use client"

import { UploadButton } from '@/utils/uploadthing'
import React, { useState } from 'react'

const CreateFormImageUpload = () => {
    const [imageUrl,setImageUrl] = useState<string | null | undefined>()
    const [user,setUser] = useState<string>()
  return (
    <div className='w-full p-2 flex items-center justify-center'>
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group relative cursor-pointer transition'>
            <span className='bg-black/40 w-full h-full rounded-full absolute flex opacity-0 group-hover:opacity-100 items-center justify-center transition text-xl font-medium'>+
            </span>
            <p className='text-xs font-medium group-hover:opacity-0 transition'>Upload</p>

            <UploadButton endpoint={`imageUploader`}
            className="w-full opacity-0 h-full absolute top-0 left-0 cursor-pointer"
            appearance={{
                button: `w-full h-full`
            }}
            content={{
                button: `Upload Image`,
            }}
            onClientUploadComplete={(res) => {
                setImageUrl(res[0].url)
                setUser(res[0].serverData.uploadedBy)
            }}
    
            onUploadError={(error:Error) => {
                console.log(`Error: ${error.message}`)
            }}/>
        </div>
    </div>
  )
}

export default CreateFormImageUpload