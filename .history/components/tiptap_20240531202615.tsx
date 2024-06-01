'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const Tiptap = () => {
  const editor = useEditor({
    element: document.querySelector('.element'),
    extensions: [
      Document,
      Paragraph,
      Text,
    ],
    content: '<p>Example Text</p>',
    autofocus: true,
    editable: true,
    injectCSS: false,
  })

  console.log(editor?.getText())

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap