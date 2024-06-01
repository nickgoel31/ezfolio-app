"use client"

import Tiptap from '@/components/tiptap'
import { useEditor } from '@tiptap/react'
import React, { useState } from 'react'

import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})



const CreateQuestionPage = () => {

    const defaultDesc = ""
    const [descText,setDescText] = useState<string>("")

    const onChange = (richText:string) => {
        setDescText(richText)
    }

    console.log("descText: " + descText)

  return (
    <div className='w-full h-full px-6 relative'>

        <div className='space-y-14 lg:px-24 '>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold leading-normal'>Ask a question</h1>
                    <p className='text-muted-foreground text-sm font-medium'>
                        Make sure your question is not already answered and is unique
                    </p>
                </div>
            </div>



            <div className='element relative'>
                <Tiptap description={defaultDesc} onChange={onChange}/>
            </div>

        </div>

        <div className='pb-16'>
      
        </div>
    </div>
  )
}

export default CreateQuestionPage