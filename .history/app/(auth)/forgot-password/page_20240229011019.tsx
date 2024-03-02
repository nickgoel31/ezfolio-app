"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { resetPasswordFormSchema } from "@/form-schemas"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"



const ForgotPasswordPage = () => {

  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <div className='space-y-2 text-center pb-3'>
            <h1 className='font-bold text-3xl'>Forgot password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Enter email associated with the devlinker account to receive a reset link.
            </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[400px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        
        

        <Button variant={"link"} asChild>
          <Link href={"/login"}>Back to login</Link>
        </Button>

    </div>
  )
}

export default ForgotPasswordPage