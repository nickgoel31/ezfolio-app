"use client"

import { uploadImageOfUserById } from "@/actions/user/upload-image"
import { UploadButton } from "@/utils/uploadthing"
import { useEffect, useState } from "react"

const ChangeImage = ({pagePicUrl}:{pagePicUrl:string | null | undefined}) => {
  const [imageUrl,setImageUrl] = useState<string | null | undefined>(pagePicUrl)
    const [user,setUser] = useState<string>()

    useEffect(() => {
        uploadImageOfUserById(user,imageUrl)
    },[imageUrl])

  return (
    <>
        {imageUrl && (
          <UploadButton 
          endpoint={`imageUploader`}
          className="w-fit"
          appearance={{
              button: `p-2 px-4 w-fit rounded-md cursor-pointer hover:bg-primary-foreground-hover text-sm font-medium transition-all duration-200 ease-in-out h-fit`,
              allowedContent: `hidden`
          }}
          content={{
              button: `Change`,
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
    </>
  )
}

export default ChangeImage