import { Editor } from '@tiptap/react'
import React from 'react'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor)
  return (
    <div>EditorToolbar</div>
  )
}

export default EditorToolbar