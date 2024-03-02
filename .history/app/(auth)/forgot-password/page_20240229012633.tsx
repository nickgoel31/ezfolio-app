"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
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
import { sendResetPasswordLink } from "@/actions/auth/password-reset"
import { AlertTriangle } from "lucide-react"



const ForgotPasswordPage = () => {

  const [error, setError] = useState<string | undefined>()

  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    setError("")
    sendResetPasswordLink(values).then(d => setError(d?.error))
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Forgot password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Enter email associated with the devlinker account to receive a reset link.
            </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[400px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button type="submit" className="w-full">Send reset link</Button>
            </div>
          </form>
        </Form>
        
        

        <Button variant={"link"} asChild>
          <Link href={"/login"}>Back to login</Link>
        </Button>

        {error && (
          <div className="border border-red-500 bg-red-500/10 p-4 rounded max-w-72 text-sm font-medium text-red-500 flex items-center gap-3">
            <AlertTriangle size={20}/>
            {error}
          </div>
        )}

    </div>
  )
}

export default ForgotPasswordPage