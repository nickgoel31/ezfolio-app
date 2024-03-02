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
            className="w-full opacity-100 h-full absolute top-0 left-0 cursor-pointer"
            appearance={{
                container: `border border-foreground/10 rounded-lg p-4 w-full h-full flex items-center justify-center cursor-pointer`,
                clearBtn: `bg-red-500 text-white p-2 rounded-md absolute top-2 right-2 cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in-out`,
                button: `bg-primary-foreground text-white p-2 rounded-md cursor-pointer hover:bg-primary-foreground-hover transition-all duration-200 ease-in-out`
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