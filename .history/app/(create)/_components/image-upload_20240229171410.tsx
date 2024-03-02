"use client"

import { UploadButton } from '@/utils/uploadthing'
import { Replace } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ColorRing, Oval, TailSpin } from 'react-loader-spinner'

const CreateFormImageUpload = ({onImageUrlChange}:{onImageUrlChange:(url:string | null | undefined) => void}) => {
    const [imageUrl,setImageUrl] = useState<string | null | undefined>()
    const [user,setUser] = useState<string>()

    const [uploading,setUploading] = useState<boolean>(false)

    useEffect(() => {
        onImageUrlChange(imageUrl)
        
    },[imageUrl])

  return (
    <div className='w-full p-2 flex items-center justify-center'>
        
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group relative cursor-pointer transition'>
            <span className='bg-black/50 w-full h-full rounded-full absolute flex opacity-0 group-hover:opacity-100 items-center justify-center transition text-xl font-medium z-[7]'>{imageUrl ? <Replace />:`+`}
            </span>
            {!imageUrl && !uploading && <p className='text-xs font-medium group-hover:opacity-0 transition'>Upload</p>}
            {uploading && (
                <div className='absolute w-full h-full z-[11] bg-background flex items-center    justify-center'>
                    <ColorRing
                    visible={true}
                    height="25"
                    width="25"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#7C3AED', '#7C3AED', '#7C3AED','#7C3AED','#7C3AED']}
                    />
                </div>
            )}

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

            {imageUrl && !uploading && (
                <Image src={imageUrl} alt='Image' width={100} height={100} className='absolute w-full h-full top-0 left-0'/>
            )}
        </div>
    </div>
  )
}

export default CreateFormImageUpload