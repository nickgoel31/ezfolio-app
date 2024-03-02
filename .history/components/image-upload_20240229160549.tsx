"use client"

import { uploadImageOfUserById } from "@/actions/user/upload-image"
import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { useEffect, useState } from "react"
import { UploadFileResponse } from "uploadthing/client"

const ImageUpload = ({pagePicUrl}:{pagePicUrl:string | null | undefined}) => {

    const [imageUrl,setImageUrl] = useState<string | null | undefined>(pagePicUrl)
    const [user,setUser] = useState<string>()

    useEffect(() => {
        uploadImageOfUserById(user,imageUrl)
    },[imageUrl])

  return (
    <div className="w-full bg-red-500 max-w-20">
        {!imageUrl && (
            <UploadButton 
            endpoint={`imageUploader`}
            className=""
            appearance={{
                
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
            }}
            />
        )}

        {imageUrl ? (
            <div className='border p-2 rounded overflow-hidden h-full w-full object-contain flex items-center justify-center'>
                <Image src={imageUrl} alt='page-pic' width={200} height={200} className='h-32 w-32'/>
                
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