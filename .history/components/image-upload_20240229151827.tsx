"use client"

import { UploadButton } from "@/utils/uploadthing"
import { UploadFileResponse } from "uploadthing/client"

const ImageUpload = () => {
  return (
    <div>
        <UploadButton 
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            console.log("Files:", res);
        }}

        onUploadError={(error:Error) => {
            console.log(`Error: ${error.message}`)
        }}
        />
    </div>
  )
}

export default ImageUpload