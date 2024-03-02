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