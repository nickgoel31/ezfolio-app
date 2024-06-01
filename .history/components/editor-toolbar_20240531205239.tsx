import { Editor } from '@tiptap/react'
import React from 'react'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full rounded-md border border-input bg-background p-3'>
        Edit
    </div>
  )
}

export default EditorToolbar