import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { Bold, Code, Heading1, Heading2, Heading3, Heading4, Italic, Quote } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaParagraph } from 'react-icons/fa'
import { ContextMenuContent } from './ui/context-menu'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <ContextMenuContent>
          
        
        <div className='w-full rounded-md p-3 flex items-center gap-2'>

            {/* BOLD */}
            <Toggle size={"sm"} className='border ' pressed={editor.isActive("bold")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
                <Bold size={20}/>
            </Toggle>

            {/* Italic */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("italic")} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
                <Italic size={20}/>
            </Toggle>

            {/* Code */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("code")} onPressedChange={() => editor.chain().focus().toggleCode().run()}>
                <Code size={20}/>
            </Toggle>

            {/* Block Quote */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("blockquote")} onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}>
                <Quote size={20}/>
            </Toggle>

            
        </div>
    </ContextMenuContent>
  )
}

export default EditorToolbar