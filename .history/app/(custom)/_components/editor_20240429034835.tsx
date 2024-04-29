"use client"

import React, { useState } from 'react'
import Editor from "@monaco-editor/react"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import EditorMenu from './editor-menu'
  

const themesList = [
    {name:'vs-dark',value:'vs-dark'},
    {name:'vs-light',value:'vs-light'},
    {name:'hc-black',value:'hc-black'},
    {name:'hc-white',value:'hc-white'},
]

const fontSizeList = [
    {name:'10',value:10},
    {name:'12',value:12},
    {name:'14',value:14},
    {name:'16',value:16},
    {name:'18',value:18},
    {name:'20',value:20},
    {name:'22',value:22},
    {name:'24',value:24},
    {name:'26',value:26},
    {name:'28',value:28},
    {name:'30',value:30},

]

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
    <div className='w-full h-[85vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b flex items-center justify-center'>
            <EditorMenu />
        </div>

            
        <Editor
            height={"100%"}
            width="100%"
            defaultLanguage="html"
            className="h-full w-full"
            defaultValue={code}
            options={{
                wordWrap: 'on',
                fontSize: fontSizeState,
                theme: themeState,
            }}
        />
    </div>
  )
}

export default CodeEditor