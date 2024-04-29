"use client"

import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

const CustomThemeEditor = () => {
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );
  return (
    <div className='w-full h-[100vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

        <div className='p-4 bg-foreground/[0.02] w-full h-full'>

        </div>
    </div>
  )
}

export default CustomThemeEditor