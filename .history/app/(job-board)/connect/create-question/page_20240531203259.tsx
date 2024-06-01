"use client"

import Tiptap from '@/components/tiptap'
import { useEditor } from '@tiptap/react'
import React from 'react'

import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

new Editor({
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

const CreateQuestionPage = () => {

    const editor = useEditor<typeof Editor>(Editor)

    // console.log(editor?.getText())

  return (
    <div className='w-full h-full px-6'>

        <div className='space-y-14 lg:px-24'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold leading-normal'>Ask a question</h1>
                    <p className='text-muted-foreground text-sm font-medium'>
                        Make sure your question is not already answered and is unique
                    </p>
                </div>
            </div>

            <div className='element'>

            </div>

            <Tiptap />
        </div>

        <div className='pb-16'>
      
        </div>
    </div>
  )
}

export default CreateQuestionPage