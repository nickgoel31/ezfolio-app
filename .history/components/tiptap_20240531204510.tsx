'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const Tiptap = ({description}:{description:string}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure()
    ],
    content: description,
    autofocus: true,
    editable: true,
    editorProps:{
      attributes:{
        class:"rounded-md border min-h-[150px] border-input bg-background p-3"
      }
    },
    onUpdate({editor}){
      onchange(editor.getHTML())
    }
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap