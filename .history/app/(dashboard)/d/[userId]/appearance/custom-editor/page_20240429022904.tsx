"use client"

import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { ScrollArea } from "@/components/ui/scroll-area";

const CustomThemeEditor = () => {
    const [code, setCode] = useState(
        `<div className='w-full h-[100vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
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
  return (
    <div className='w-full h-[100vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

            <ScrollArea className="w-full h-full p-4 bg-foreground/[0.02] ">
                <div className="py-10">
                    <CodeEditor
                    value={code}
                    language="html"
                    placeholder="Please enter html"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={0}
                    style={{
                        fontSize:15,
                        backgroundColor: "#0E0E10",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                    />
                </div>
               
            </ScrollArea>
    </div>
  )
}

export default CustomThemeEditor