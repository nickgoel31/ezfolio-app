import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { Bold, Heading1, Heading2, Heading3, Heading4 } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaParagraph } from 'react-icons/fa'

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full rounded-md border border-input bg-background p-3 flex items-center gap-2'>
        {/* HEADING */}
        <DropdownMenu>
        <DropdownMenuTrigger className='font-bold p-1 px-3 h-full rounded-md hover:bg-foreground/10 text-sm border '>Heading</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:1})} onPressedChange={() => editor.chain().focus().toggleHeading({level:1}).run()}>
                    <Heading1 size={20}/>
                </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
                    <Heading2 size={20}/>
                </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:3})} onPressedChange={() => editor.chain().focus().toggleHeading({level:3}).run()}>
                    <Heading3 size={20}/>
                </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:4})} onPressedChange={() => editor.chain().focus().toggleHeading({level:4}).run()}>
                    <Heading4 size={20}/>
                </Toggle>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        {/* BOLD */}
        <Toggle size={"sm"} className='border ' pressed={editor.isActive("")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
            <Bold size={20}/>
        </Toggle>

        {/* Italic */}
        <Toggle size={"sm"} className='border' pressed={editor.isActive("heading", {level:4})} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
            <Bold size={20}/>
        </Toggle>

        
    </div>
  )
}

export default EditorToolbar