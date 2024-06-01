import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { AlignLeft, Bold, Code, Heading1, Heading2, Heading3, Heading4, Italic, ListOrdered, Quote } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaParagraph } from 'react-icons/fa'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <ContextMenuContent>
          
        
        <div className='w-full rounded-md p-3 grid grid-cols-4 items-center gap-2'>

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

        {/* HEADING */}
        <ContextMenuSeparator />

        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Heading</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:1})} onPressedChange={() => editor.chain().focus().toggleHeading({level:1}).run()}>
                    <Heading1 size={20}/>
                    <ContextMenuShortcut>⌘Alt1</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
                    <Heading2 size={20}/>
                    <ContextMenuShortcut>⌘Alt2</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:3})} onPressedChange={() => editor.chain().focus().toggleHeading({level:3}).run()}>
                    <Heading3 size={20}/>
                    <ContextMenuShortcut>⌘Alt3</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:4})} onPressedChange={() => editor.chain().focus().toggleHeading({level:4}).run()}>
                    <Heading4 size={20}/>
                    <ContextMenuShortcut>⌘Alt4</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Lists</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("orderedList")} onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}>
                    <ListOrdered size={20}/>
                    <ContextMenuShortcut>⌘Alt1</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
                    <Heading2 size={20}/>
                    <ContextMenuShortcut>⌘Alt2</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:3})} onPressedChange={() => editor.chain().focus().toggleHeading({level:3}).run()}>
                    <Heading3 size={20}/>
                    <ContextMenuShortcut>⌘Alt3</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:4})} onPressedChange={() => editor.chain().focus().toggleHeading({level:4}).run()}>
                    <Heading4 size={20}/>
                    <ContextMenuShortcut>⌘Alt4</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Align</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("rightAlign")} onPressedChange={() => editor.commands.}>
                    <AlignLeft size={20}/>
                    <ContextMenuShortcut>⌘Alt1</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
                    <Heading2 size={20}/>
                    <ContextMenuShortcut>⌘Alt2</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:3})} onPressedChange={() => editor.chain().focus().toggleHeading({level:3}).run()}>
                    <Heading3 size={20}/>
                    <ContextMenuShortcut>⌘Alt3</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("heading", {level:4})} onPressedChange={() => editor.chain().focus().toggleHeading({level:4}).run()}>
                    <Heading4 size={20}/>
                    <ContextMenuShortcut>⌘Alt4</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

            
            
    </ContextMenuContent>
  )
}

export default EditorToolbar