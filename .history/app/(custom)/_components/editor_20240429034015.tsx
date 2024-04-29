"use client"

import React, { useState } from 'react'
import Editor from "@monaco-editor/react"

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
  return (
    <div className='w-full h-[85vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b flex items-center justify-center'>

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
                theme: 'vs-dark',
            }}
        />
    </div>
  )
}

export default CodeEditor