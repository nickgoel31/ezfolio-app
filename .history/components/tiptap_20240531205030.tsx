'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const Tiptap = ({description, onChange}:{description:string, onChange: (richText:string) => void}) => {
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
      onChange(editor.getHTML())
    }
  })

  return (
    <>
      <Toolbar editor={editor}/>
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap