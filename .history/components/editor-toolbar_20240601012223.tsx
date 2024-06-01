import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Heading3, Heading4, Highlighter, Italic, List, ListOrdered, Quote, Strikethrough } from 'lucide-react'

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
            <Toggle size={"sm"} className='border' pressed={editor.isActive("codeBlock")} onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}>
                <Code size={20}/>
            </Toggle>

            {/* Block Quote */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("blockquote")} onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}>
                <Quote size={20}/>
            </Toggle>

            {/* LINK */}

            {/* STRIKETHROUGH */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("underline")} onPressedChange={() => editor.chain().focus().toggleStrike().run()}>
                <Strikethrough size={20}/>
            </Toggle>

            {/* HIGHLIGHTER */}
            <Toggle size={"sm"} className='border' pressed={editor.isActive("highlight")} onPressedChange={() => editor.chain().focus().toggleHighlight().run()}>
                <Highlighter size={20}/>
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
                    <ContextMenuShortcut>⌘⇧7</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive("bulletList")} onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
                    <List size={20}/>
                    <ContextMenuShortcut>⌘⇧8</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Align</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive({ textAlign: 'left' })} onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}>
                    <AlignLeft size={20}/>
                    <ContextMenuShortcut>⌘⇧L</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive({ textAlign: 'center' })} onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}>
                    <AlignCenter size={20}/>
                    <ContextMenuShortcut>⌘⇧E</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive({ textAlign: 'right' })} onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}>
                    <AlignRight size={20}/>
                    <ContextMenuShortcut>⌘⇧R</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
            <ContextMenuItem>
                <Toggle size={"sm"} className='w-full' pressed={editor.isActive({ textAlign: 'justify' })} onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}>
                    <AlignJustify size={20}/>
                    <ContextMenuShortcut>⌘⇧J</ContextMenuShortcut>
                </Toggle>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

            
            
    </ContextMenuContent>
  )
}

export default EditorToolbar