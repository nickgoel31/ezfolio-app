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
import { boilerCodeCss, boilerCodeHtml, fontSizeList, themesList } from '@/data/editorData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


  



const CodeEditor = () => {
    const [htmlCode, setHtmlCode] = useState<string | undefined>(boilerCodeHtml);
    const [cssCode, setCssCode] = useState<string | undefined>(boilerCodeCss)

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
                    <Button variant={"outline"} onClick={() => {
                        setHtmlEditor(true)
                        setCssEditor(false)
                    }} size={"sm"} className={cn('text-sm font-medium', htmlEditor && 'bg-foreground/20')}>Html</Button>
                    <Button variant={"outline"} size={"sm"} onClick={() => {
                        setHtmlEditor(false)
                        setCssEditor(true)
                    }} className={cn('text-sm font-medium', cssEditor && 'bg-foreground/20')}>Css</Button>
                </div>
            </div>
            
            <div>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Theme</MenubarTrigger>
                        <MenubarContent>
                            {themesList.map((theme) => (
                                <MenubarItem key={theme.name} onClick={()=>setThemeState(theme.value)}>
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
                                <MenubarItem key onClick={()=>setFontSizeState(font.value)}>
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
            language={htmlEditor ? 'html' : cssEditor ? 'css' : 'js'}
            theme={themeState}
            className="h-full w-full"
            defaultValue={htmlEditor ? htmlCode : cssEditor ? cssCode : 'ERROR'}
            value={htmlEditor ? htmlCode : cssEditor ? cssCode : 'ERROR'}
            onChange={(val) => {
                if(htmlEditor){
                    setHtmlCode(val)
                }else if(cssEditor){
                    setCssCode(val)
                }
            }}
            options={{
                wordWrap: 'on',
                fontSize: fontSizeState,
            }}
        />
    </div>
  )
}

export default CodeEditor