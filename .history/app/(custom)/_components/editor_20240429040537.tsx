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
import { fontSizeList, themesList } from '@/data/editorData';
import { Button } from '@/components/ui/button';


  



const CodeEditor = () => {
    const [code, setCode] = useState(
        `<div className='w-full h-[85vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

        <div className='p-4 bg-foreground/[0.02] w-full h-full'>
        <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                fontSize:20,
                backgroundColor: "#0E0E10",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
        </div>
    </div>`
    );

    const [fontSizeState, setFontSizeState] = useState(16)
    const [themeState, setThemeState] = useState('vs-dark')
  return (
    <div className='w-full h-[94vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-14 border-b px-4 flex items-center justify-between'>
            <div>
                <Button variant={"outline"} size={"sm"} className='text-sm font-medium'>Back to dashboard</Button>
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
            defaultValue={code}
            value={}
            options={{
                wordWrap: 'on',
                fontSize: fontSizeState,
            }}
        />
    </div>
  )
}

export default CodeEditor