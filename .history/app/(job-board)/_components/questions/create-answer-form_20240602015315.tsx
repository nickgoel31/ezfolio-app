"use client"

import Tiptap from '@/components/tiptap'
import { useEditor } from '@tiptap/react'
import React, { useState } from 'react'

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
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { answerSchema, questionPostSchema } from '@/form-schemas'

import { createAnswerForQuestionPostInDB } from '@/actions/question-post/answer/create'
import { marked } from 'marked'
import TurndownService from 'turndown'

const turndownService = new TurndownService();

const CreateNewAnswer = ({questionPostId}:{questionPostId:string}) => {
    const currentUser = useCurrentUser()
    const form = useForm<z.infer<typeof answerSchema>>({
        resolver: zodResolver(answerSchema),
        defaultValues: {
            answer:""
        },
    })
    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof answerSchema>) {
        if(!currentUser || !currentUser.id) return;
        values.answer = await marked(values.answer)
        createAnswerForQuestionPostInDB(values,questionPostId,currentUser.id)
    }

  return (
    <div className='space-y-2'>
        <h3 className='font-medium text-lg'>Have an answer to this question?</h3>

        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                        <FormItem>
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

                    <Button type="submit">Share</Button>
                </form>
            </Form>
    </div>
  )
}

export default CreateNewAnswer