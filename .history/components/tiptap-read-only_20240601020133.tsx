"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import React, { useState } from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
    const editor = useEditor({
        editable:false,
        content: description,
    })
    if(!editor){
        return null
    }
    
  return (
    <div>
        <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapReadOnly