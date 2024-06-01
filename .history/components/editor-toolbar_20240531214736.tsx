import { Editor } from '@tiptap/react'
import React from 'react'
import { Toggle } from './ui/toggle'
import { Heading1, Heading2 } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const EditorToolbar = ({editor}:{editor:Editor | null}) => {
    if(!editor){
        return null
    }
  return (
    <div className='w-full rounded-md border border-input bg-background p-3 flex items-center gap-2'>

        <DropdownMenu>
        <DropdownMenuTrigger className='font-bold p-2 rounded-'>H</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Toggle size={"sm"} pressed={editor.isActive("heading", {level:1})} onPressedChange={() => editor.chain().focus().toggleHeading({level:1}).run()}>
                    <Heading1 size={20}/>
                </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Toggle size={"sm"} pressed={editor.isActive("heading", {level:2})} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
                    <Heading2 size={20}/>
                </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>


        
    </div>
  )
}

export default EditorToolbar