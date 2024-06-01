'use client'

import { useEditor, EditorContent, mergeAttributes, EditorContentProps } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import EditorToolbar from './editor-toolbar'
import Code from '@tiptap/extension-code'
import Blockquote from '@tiptap/extension-blockquote'
import { MutableRefObject, useRef } from 'react'
import TextAlign from '@tiptap/extension-text-align'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'


import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import CodeBlock from '@tiptap/extension-code-block'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Document from '@tiptap/extension-document'

import {common, createLowlight} from 'lowlight'

const lowlight = createLowlight(common)

lowlight.highlight('css', 'em { color: red }')

const TiptapReadOnly = ({description}:{description:string}) => {
    const editor = useEditor({
        extensions: [
         
        ],
        content: description,
        autofocus: false,
        editable: false,
        editorProps:{
          attributes:{
            class:"rounded-md border min-h-[150px] border-input bg-background p-3"
          }
        },
      })
    
  return (
    <div>
        <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapReadOnly