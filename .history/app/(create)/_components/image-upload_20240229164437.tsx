"use client"

import { UploadButton } from '@/utils/uploadthing'
import { Replace } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const CreateFormImageUpload = () => {
    const [imageUrl,setImageUrl] = useState<string | null | undefined>()
    const [user,setUser] = useState<string>()
    const [uploading,setUploading] = useState<boolean>(false)
  return (
    <div className='w-full p-2 flex items-center justify-center'>
        {uploading && (
            <div className='absolute top-10 border shadow-md left-1/2 -translate-x-1/2 p-3 rounded bg-foreground/10 z-[10] text-sm font-medium'>
                
                Uploading image
            </div>
        )}
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group relative cursor-pointer transition'>
            <span className='bg-black/50 w-full h-full rounded-full absolute flex opacity-0 group-hover:opacity-100 items-center justify-center transition text-xl font-medium z-[7]'>{imageUrl ? <Replace />:`+`}
            </span>
            {!imageUrl && <p className='text-xs font-medium group-hover:opacity-0 transition'>Upload</p>}

            <UploadButton endpoint={`imageUploader`}
            className="w-full opacity-0 h-full absolute top-0 left-0 cursor-pointer z-[10]"
            appearance={{
                button: `w-full h-full`,
                allowedContent: `hidden`
            }}
            content={{
                button: `Upload Image`,
            }}
            onClientUploadComplete={(res) => {
                setImageUrl(res[0].url)
                setUser(res[0].serverData.uploadedBy)
                setUploading(false)
            }}

            onUploadProgress={() => {
                setUploading(true)
            }}
    
            onUploadError={(error:Error) => {
                console.log(`Error: ${error.message}`)
            }}/>

            {imageUrl && (
                <Image src={imageUrl} alt='Image' width={100} height={100} className='absolute w-full h-full top-0 left-0'/>
            )}
        </div>
    </div>
  )
}

export default CreateFormImageUpload