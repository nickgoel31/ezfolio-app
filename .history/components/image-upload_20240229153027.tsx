"use client"

import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { useState } from "react"
import { UploadFileResponse } from "uploadthing/client"

const ImageUpload = () => {

    const [imageUrl,setImageUrl] = useState<string>()
    const [user,setUser] = useState<string>()

  return (
    <div>
        <UploadButton 
        endpoint={`imageUploader`}
        appearance={{
            container: `border-2 border-dashed border-muted-foreground rounded-lg p-4 w-full h-full flex items-center justify-center cursor-pointer`,
            clearBtn: `bg-red-500 text-white p-2 rounded-md absolute top-2 right-2 cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in-out`,
            button: `bg-primary-foreground text-white p-2 rounded-md cursor-pointer hover:bg-primary-foreground-hover transition-all duration-200 ease-in-out`
        }}
        onClientUploadComplete={(res) => {
            setImageUrl(res[0].url)
            setUser(res[0].serverData.uploadedBy)
        }}

        onUploadError={(error:Error) => {
            console.log(`Error: ${error.message}`)
        }}
        />

        {imageUrl ? (
                        <div className='border p-2 rounded overflow-hidden object-fill h-full w-full'>
                            <Image src={imageUrl} alt='page-pic' width={1000} height={1000} className=''/>
                        </div>
                    ):(
                        <div className='p-2 rounded overflow-hidden object-fill h-full flex-col gap-2 w-full flex items-center justify-center'>
                            <p className='text-muted-foreground font-medium text-sm'>No picture uploaded yet.</p>
                        </div>
                    )}
    </div>
  )
}

export default ImageUpload