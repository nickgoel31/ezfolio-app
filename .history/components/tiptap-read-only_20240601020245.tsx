"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import React, { useState } from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
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
    <div>
        <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapReadOnly