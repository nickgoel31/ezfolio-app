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
  title: z.string().min(2, {message:"Title must be atleast 2 characters long"}).max(50),
  description: z.string().min(10,{message:"Description must be atleast 10 characters long"}).trim()

})



const CreateQuestionPage = () => {

    const defaultDesc = ""
    const [descText,setDescText] = useState<string>("")

    const onChange = (richText:string) => {
        setDescText(richText)
    }


     // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

  return (
    <div className='w-full h-full px-6 relative'>

        <div className='space-y-10 lg:px-24 '>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold leading-normal'>Ask a question</h1>
                    <p className='text-muted-foreground text-sm font-medium'>
                        Make sure your question is not already answered and is unique
                    </p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Sample title" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Tiptap description={defaultDesc} onChange={field.onChange}/>
                            </FormControl>
                            <FormDescription>
                                Right click inside the textarea to access formatting options
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>

        <div className='preview of question'>
            <Tiptap description={descText} />
        </div>

        <div className='pb-16'>
      
        </div>
    </div>
  )
}

export default CreateQuestionPage