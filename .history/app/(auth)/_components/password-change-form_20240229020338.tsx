import React from 'react'
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

const ChnagePasswordForm = () => {

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
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[400px]">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input placeholder="Enter new password" {...field} />
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
  )
}

export default ChnagePasswordForm