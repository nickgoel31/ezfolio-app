'use client'

import { useEditor, EditorContent, mergeAttributes } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import EditorToolbar from './editor-toolbar'
import Code from '@tiptap/extension-code'


const Tiptap = ({description, onChange}:{description:string, onChange: (richText:string) => void}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Code.configure({
        HTMLAttributes: {
          class: 'p-0.5 bg-foreground/[0.1]',
        },
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

  return (
    <div className='flex flex-col gap-2'>
      <EditorToolbar editor={editor}/>
      <EditorContent editor={editor} placeholder='Write about your query in detail here' />
    </div>
  )
}

export default Tiptap