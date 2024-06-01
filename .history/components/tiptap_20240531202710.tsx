'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels:[1,2,3],
      })
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