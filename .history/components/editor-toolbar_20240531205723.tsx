import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { Heading2 } from 'lucide-react'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full rounded-md border border-input bg-background p-3'>
        <Toggle size={"sm"} pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
            <Heading1 size={20}/>
        </Toggle>
        <Toggle size={"sm"} pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
            <Heading2 size={20}/>
        </Toggle>
    </div>
  )
}

export default EditorToolbar