import { Editor } from '@tiptap/react'
import React from 'react'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full'>
        EditorToolbar
    </div>
  )
}

export default EditorToolbar