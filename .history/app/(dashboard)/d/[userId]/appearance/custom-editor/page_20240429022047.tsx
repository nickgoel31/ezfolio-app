"use client"

import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

const CustomThemeEditor = () => {
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