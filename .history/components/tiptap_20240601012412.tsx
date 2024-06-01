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

import {common, createLowlight} from 'lowlight'

const lowlight = createLowlight(common)

lowlight.highlight('css', 'em { color: red }')





const Tiptap = ({description, onChange}:{description:string, onChange: (richText:string) => void}) => {
  const editor = useEditor({
    extensions: [
      Underline.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      StarterKit.configure(),
      CodeBlockLowlight.configure({
        HTMLAttributes: {
          class: 'p-1 px-2 rounded-md bg-foreground/[0.1]',
        },
        languageClassPrefix: 'language-',
        exitOnTripleEnter: false,
        exitOnArrowDown: false,
        lowlight

      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'relative italic before:bg-violet-600 before:absolute before:w-1 before:h-full before:left-0 px-4',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      OrderedList.configure({
        keepMarks: true,
        keepAttributes:true,
        itemTypeName: 'listItem',
        HTMLAttributes:{
          class:"list-decimal px-5"
        }
      }),
      BulletList.configure({
        itemTypeName: 'listItem',
        keepMarks: true,
        keepAttributes:true,
        HTMLAttributes:{
          class:"list-disc px-5"
        }
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Heading.extend({
        levels: [1, 2,3,4],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level)
            ? node.attrs.level
            : this.options.levels[0];
          const classes: { [index: number]: string } = {
            1: 'text-4xl font-bold',
            2: 'text-3xl font-semibold',
            3: 'text-2xl font-semibold',
            4: 'text-xl font-medium',
          };
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }).configure({ levels: [1, 2,3,4] }),
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


  const editorContentArea = useRef<HTMLDivElement>(null)

  

  return (
    <div className='relative flex flex-col gap-2'>
      <ContextMenu>
        <ContextMenuTrigger>
          <div ref={editorContentArea} className='richtext-editor-content-area'>
            <EditorContent  editor={editor} placeholder='Write about your query in detail here' />
          </div>
        </ContextMenuTrigger>
        
        <EditorToolbar editor={editor}/>
        
      </ContextMenu>

      

      
    </div>
  )
}

export default Tiptap