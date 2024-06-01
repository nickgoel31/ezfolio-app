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


const Tiptap = ({description, onChange}:{description:string, onChange: (richText:string) => void}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Code.configure({
        HTMLAttributes: {
          class: 'p-0.5 bg-foreground/[0.1]',
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'relative italic before:bg-violet-600 before:absolute before:w-1 before:h-full before:left-0 px-4',
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


  const editorContentArea = useRef<HTMLDivElement>(null)

  // Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  // entries is an array of IntersectionObserverEntry objects
  entries.forEach(entry => {
      // Check if the target element is no longer intersecting with the viewport
      if (!entry.isIntersecting) {
          // Call your function here when the target element is out of the viewport
          yourFunctionToTrigger();
      }
  });
});

// Obtain a reference to the editor content area element
const editorContentAreaElement = editorContentArea.current;

// Start observing the editor content area element
if (editorContentAreaElement) {
  observer.observe(editorContentAreaElement);
}

// Define your function to trigger when the editor content area's top gets out of the screen
function yourFunctionToTrigger() {
  // Your code here
  console.log('Editor content area is out of the screen');
}


  

  return (
    <div className='relative flex flex-col gap-2'>
      <EditorToolbar editor={editor}/>
      <div ref={editorContentArea} className='richtext-editor-content-area'>
        <EditorContent  editor={editor} placeholder='Write about your query in detail here' />
      </div>
    </div>
  )
}

export default Tiptap