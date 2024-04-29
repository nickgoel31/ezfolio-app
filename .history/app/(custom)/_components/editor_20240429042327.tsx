"use client"

import React, { useState } from 'react'
import Editor from "@monaco-editor/react"
import EditorMenu from './editor-menu';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { boilerCode, fontSizeList, themesList } from '@/data/editorData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


  



const CodeEditor = () => {
    const [htmlCode, setHtmlCode] = useState<string | undefined>(boilerCode);
    const [cssCode, setCssCode] = useState<string | undefined>('')

    const [htmlEditor,setHtmlEditor] = useState<boolean>(true)
    const [cssEditor,setCssEditor] = useState<boolean>(false)

    const [fontSizeState, setFontSizeState] = useState(16)
    const [themeState, setThemeState] = useState('vs-dark')
  return (
    <div className='w-full h-[94vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-14 border-b px-4 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <Button variant={"outline"} size={"sm"} className='text-sm font-medium'>Back to dashboard</Button>
                <div className='gap-2 flex items-center'>
                    <Button variant={"outline"} size={"sm"} className={cn('text-sm font-medium', htmlEditor && 'bg-foreground/20')}>Html</Button>
                    <Button variant={"outline"} size={"sm"} className='text-sm font-medium'>Css</Button>
                </div>
            </div>
            
            <div>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Theme</MenubarTrigger>
                        <MenubarContent>
                            {themesList.map((theme) => (
                                <MenubarItem onClick={()=>setThemeState(theme.value)}>
                                    {theme.name}
                                    {theme.value === themeState && <MenubarShortcut>Selected</MenubarShortcut>}
                                </MenubarItem>
                            ))}
                        
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>Font Size</MenubarTrigger>
                        <MenubarContent>
                            {fontSizeList.map((font) => (
                                <MenubarItem onClick={()=>setFontSizeState(font.value)}>
                                    {font.name}
                                    {font.value === fontSizeState && <MenubarShortcut>Selected</MenubarShortcut>}
                                </MenubarItem>
                            ))}
                        
                        </MenubarContent>
                    </MenubarMenu>
                    
                </Menubar>
            </div>
        </div>

            
        <Editor
            height={"100%"}
            width="100%"
            defaultLanguage="html"
            theme={themeState}
            className="h-full w-full"
            defaultValue={htmlCode}
            value={htmlCode}
            onChange={(val) => setHtmlCode(val)}
            options={{
                wordWrap: 'on',
                fontSize: fontSizeState,
            }}
        />
    </div>
  )
}

export default CodeEditor