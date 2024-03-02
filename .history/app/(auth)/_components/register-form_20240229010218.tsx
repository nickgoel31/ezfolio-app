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



export default function RegisterForm() {
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
    register(values)
  }

  return (
    <Form {...form}>
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
