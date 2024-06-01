"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import React, { useState } from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
    const [editable, setEditable] = useState(false)
    const editor = useEditor({
        editable,
    })
    if(!editor){
        return null
    }
    editor?.setEditable(editable)
    
  return (
    <div>
        <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapReadOnly