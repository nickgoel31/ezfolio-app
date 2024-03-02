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
    <div className=" bg-red-500 w-fit">
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

        
    </div>
  )
}

export default ImageUpload