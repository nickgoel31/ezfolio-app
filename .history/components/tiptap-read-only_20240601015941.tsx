import { useEditor } from '@tiptap/react'
import React from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
    const editor = useEditor({
        editable,
      })
  return (
    <div>
        <EditorContent  editor={editor} />
    </div>
  )
}

export default TiptapReadOnly