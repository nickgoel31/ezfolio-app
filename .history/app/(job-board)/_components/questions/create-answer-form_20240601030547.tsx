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
import TiptapReadOnly from '@/components/tiptap-read-only'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { questionPostSchema } from '@/form-schemas'
import { createQuestionPostInDB } from '@/actions/question-post/create'
import { redirect } from 'next/navigation'

const CreateNewAnswer = () => {
    const form = useForm<z.infer<typeof questionPostSchema>>({
        resolver: zodResolver(questionPostSchema),
        defaultValues: {
            answer
        },
    })
    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof questionPostSchema>) {
        
    }
  return (
    <div>
        <h3 className='font-medium text-lg'>Have an answer to this question?</h3>

        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Tiptap description={""} onChange={field.onChange}/>
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
  )
}

export default CreateNewAnswer