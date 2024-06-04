'use client'

import { useEditor, EditorContent, mergeAttributes, EditorContentProps } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import EditorToolbar from './editor-toolbar'
import Code from '@tiptap/extension-code'
import Blockquote from '@tiptap/extension-blockquote'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import TextAlign from '@tiptap/extension-text-align'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import { useToast } from "@/components/ui/use-toast"


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
import { Edit, Save, Trash, Trash2 } from 'lucide-react'
import { Toaster } from './ui/toaster'
import { updateQuestionPostInDB } from '@/actions/question-post/update'
import { updateAnswerInDB } from '@/actions/question-post/answer/update'
import AnswerDeleteButton from '@/app/(job-board)/_components/questions/ans-del-btn'
import TurndownService from 'turndown'

const turndownService = new TurndownService();

const lowlight = createLowlight(common)

lowlight.highlight('css', 'em { color: red }')

export const TiptapQuestionReadOnly = ({description,isPostCreator,questionPostId}:{description:string,isPostCreator:boolean,questionPostId:string}) => {
  const [editState,setEditState] = useState(false)
  const [quesState, setQuesState] = useState(description)

  const { toast } = useToast()

    const editor = useEditor({
        extensions: [
          StarterKit.configure(),
          Underline.configure({
            HTMLAttributes: {
              class: 'my-custom-class',
            },
          }),
          Link.configure({
            HTMLAttributes: {
              class: 'text-blue-500 underline font-medium underline-offset-2',
            },
            validate: href => /^https?:\/\//.test(href),
          }),
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
        autofocus: false,
        editable: false,
        editorProps:{
          attributes:{
            class:"bg-foreground/[0.01] rounded-md p-3"
          }
        },
      })

      editor?.setEditable(editState)

      if(!editor){return null}



      function onSubmit () {
        const savedQuesDesc = turndownService.turndown(editor?.getHTML() || "")
        
        const isValid = savedQuesDesc.length >= 15
        if(!isValid) return {error: "Minimum 10 characters"}
        setQuesState(savedQuesDesc)
        setEditState(false)

        

        updateQuestionPostInDB(savedQuesDesc,questionPostId)
        .then(d => {
          if(d.success) {
            toast({
              title: "Question Updated",
            })
          }
        })

        
      }
    
  return (
    <>
      <Toaster />
    <div className='relative'>
        <button onClick={() => setEditState(!editState)} className='absolute z-[10] top-4 right-4 cursor-pointer'>
          {isPostCreator ? editState ? <Save onClick={onSubmit} size={20}/> : <Edit size={20}/> : null}
        </button>
        {!editState && <EditorContent editor={editor} />}

        {editState && isPostCreator && <ContextMenu>
          <ContextMenuTrigger>
            <div className='richtext-editor-content-area'>
              <EditorContent  editor={editor} />
            </div>
          </ContextMenuTrigger>
          
          <EditorToolbar editor={editor}/>
        
        </ContextMenu>}
      </div>
    </>
  )
}

export const TiptapAnswerReadOnly = ({description,isPostCreator,answerId,answerUserId}:{description:string,isPostCreator:boolean,answerId:string,answerUserId:string}) => {
  const [editState,setEditState] = useState(false)
  const [ansState, setAnsState] = useState(description)
  const { toast } = useToast()
    const editor = useEditor({
        extensions: [
          StarterKit.configure(),
          Underline.configure({
            HTMLAttributes: {
              class: 'my-custom-class',
            },
          }),
          Link.configure({
            HTMLAttributes: {
              class: 'text-blue-500 underline font-medium underline-offset-2',
            },
            validate: href => /^https?:\/\//.test(href),
          }),
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
        autofocus: false,
        editable: false,
        editorProps:{
          attributes:{
            class:"bg-foreground/[0.01] rounded-md p-3"
          }
        },
      })

      editor?.setEditable(editState)

      function onSubmit () {
        const savedAnsDesc = editor?.getHTML() || ""
        const isValid = savedAnsDesc.length >= 15
        if(!isValid) return {error: "Minimum 10 characters"}
        setAnsState(savedAnsDesc)
        setEditState(false)

        updateAnswerInDB(savedAnsDesc,answerId,answerUserId)
        .then(d => {
          if(d.success) {
            toast({
              title: "Answer Updated",
            })
          }
          if(d.error){
            toast({
              title: d.error,
              variant:"destructive"
            })
          }
        })

        
      }
    
  return (
    <div className='relative'>
        <div className='absolute z-[10] top-4 right-4 cursor-pointer flex items-center gap-4'>
          {isPostCreator && 
            <button onClick={() => setEditState(!editState)} className=''>
              {editState ? <Save onClick={onSubmit} size={20}/> : <Edit size={20}/>}
            </button>
          }
          
          
          {isPostCreator && <AnswerDeleteButton answerId={answerId}/>}
        </div>
        {!editState && <EditorContent editor={editor} />}

        {editState && isPostCreator && <ContextMenu>
          <ContextMenuTrigger>
            <div className='richtext-editor-content-area'>
              <EditorContent  editor={editor} />
            </div>
          </ContextMenuTrigger>
          
          <EditorToolbar editor={editor}/>
        
        </ContextMenu>}
    </div>
  )
}

export const TiptapAnswerAutomaticEzBuddyReadOnly = ({answer}:{answer:string}) => {
    const editor = useEditor({
        extensions: [
          StarterKit.configure(),
          Underline.configure({
            HTMLAttributes: {
              class: 'my-custom-class',
            },
          }),
          Link.configure({
            HTMLAttributes: {
              class: 'text-blue-500 underline font-medium underline-offset-2',
            },
            validate: href => /^https?:\/\//.test(href),
          }),
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
        content: answer,
        autofocus: false,
        editable: false,
        editorProps:{
          attributes:{
            class:"bg-foreground/[0.01] rounded-md p-3"
          }
        },
      })

    
  return (
    <div className='relative w-full'>
        {<EditorContent editor={editor} />}
    </div>
  )
}

export const TiptapEzBuddyMessages = ({answer}:{answer:string}) => {
  const htmlMsg = await marked(answer);
  const editor = useEditor({
      extensions: [
        StarterKit.configure(),
        Underline.configure({
          HTMLAttributes: {
            class: 'my-custom-class',
          },
        }),
        Link.configure({
          HTMLAttributes: {
            class: 'text-blue-500 underline font-medium underline-offset-2',
          },
          validate: href => /^https?:\/\//.test(href),
        }),
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
      content: htmlMsg,
      autofocus: false,
      editable: false,
      editorProps:{
        attributes:{
          class:"bg-foreground/[0.01] rounded-md p-3"
        }
      },
    })

  
return (
  <div className='relative w-full'>
      {<EditorContent editor={editor} />}
  </div>
)
}

