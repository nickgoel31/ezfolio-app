import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

const EditorMenu = () => {
  return (
    <div>
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        
                    </MenubarItem>
                
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </div>
  )
}

export default EditorMenu