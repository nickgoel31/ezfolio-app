"use client"

import { UploadButton } from "@/utils/uploadthing"
import { UploadFileResponse } from "uploadthing/client"

const ImageUpload = () => {
  return (
    <div>
        <UploadButton 
        endpoint="imageUploader"
        onClientUploadComplete={(res:UploadFileResponse<{
            uploadedBy: string;
        }>[]) => {
            console.log("Files:", res);
            alert('Upload Complete')
        }}

        onUploadError={(error:Error) => {
            alert(`Error: ${error.message}`)
        }}
        />
    </div>
  )
}

export default ImageUpload