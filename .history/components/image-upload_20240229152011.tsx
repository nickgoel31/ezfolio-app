"use client"

import { UploadButton } from "@/utils/uploadthing"
import { useState } from "react"
import { UploadFileResponse } from "uploadthing/client"

const ImageUpload = () => {

    const [image,setImage] = useState<UploadFileResponse<string> | null>(null)

  return (
    <div>
        <UploadButton 
        endpoint="imageUploader"
        // onClientUploadComplete={(res) => {
        //     console.log("Files:", res);
        // }}

        // onUploadError={(error:Error) => {
        //     console.log(`Error: ${error.message}`)
        // }}
        />
    </div>
  )
}

export default ImageUpload