import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full rounded-md border border-input bg-background p-3'>
        <Toggle size={"sm"} pressed={editor.is}>

        </Toggle>
    </div>
  )
}

export default EditorToolbar