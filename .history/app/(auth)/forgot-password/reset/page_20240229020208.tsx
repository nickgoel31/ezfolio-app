"use client"
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'
import { useDeletePasswordResetToken, usePasswordResetToken } from '@/hooks/usePasswordResetToken'
import { deletePasswordResetTokenByToken } from '@/actions/auth/password-reset'

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

  import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { changePasswordFormSchema } from '@/form-schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ResetPassword = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
    if(!resetPasswordToken) return;

    const token = usePasswordResetToken(resetPasswordToken) 
    if(!token) return  (
        <div>
            Loading.....
        </div>
    )

    if(new Date().getTime() - token.createdAt.getTime() > 150 * 1000 * 60) {
        useDeletePasswordResetToken(token.token)
        return (
            <div>TOKEN EXPIRED, CREATE A NEW ONE</div>
        )
        
    }

    if(!resetPasswordToken) redirect("/login")

    const form = useForm<z.infer<typeof changePasswordFormSchema>>({
        resolver: zodResolver(changePasswordFormSchema),
        defaultValues: {
          password: "",
          confirmPassword:"",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof changePasswordFormSchema>) {
        
      }


    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Change your password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form below and click reset!
            </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[400px]">
            <FormField
              control={form.control}
              name="password"
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

    </div>
  )
}

export default ResetPassword