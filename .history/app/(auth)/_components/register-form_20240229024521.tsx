"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { registerFormSchema } from "@/form-schemas"
import { register } from "@/actions/auth/register"
import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { useState } from "react"



export default function RegisterForm() {

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    setError("")
    setSuccess("")
    register(values)
  }

  return (
    <Form {...form}>
      {error && (
          <div className="border border-red-500 bg-red-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-red-500 flex items-center gap-3">
            <AlertTriangle size={20}/>
            {error}
          </div>
        )}

        {success && (
          <div className="border border-emerald-500 bg-emerald-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-emerald-500 flex items-center gap-3">
            <CheckCircle2 size={20}/>
            {success}
          </div>
        )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full max-w-[400px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" overflow-hidden relative">
                        <div className="absolute top-0 h-full left-0 flex items-center justify-center px-4 text-muted-foreground text-sm font-medium">devlinker.tech/</div>
                        <div className="">
                            <Input placeholder="username" className="pl-[7.4rem] border" {...field} />
                        </div>
                    </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />
        <div className="w-full flex justify-center">
          <Button className="w-full" type="submit">Dive in to Devlinker</Button>
        </div>

        
      </form>

      
    </Form>
  )
}
