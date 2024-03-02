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
          className="w-full"
          appearance={{
              button: `bg-primary-foreground text-white p-2 rounded-md cursor-pointer hover:bg-primary-foreground-hover transition-all duration-200 ease-in-out`
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