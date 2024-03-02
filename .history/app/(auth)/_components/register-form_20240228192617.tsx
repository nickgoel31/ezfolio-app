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



export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full max-w-[400px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <div className=" overflow-hidden relative">
                        <div className="absolute top-0 h-full left-0 flex items-center justify-center px-4 text-muted-foreground text-sm font-medium">Linkin.tech/</div>
                        <div className="">
                            <Input placeholder="username" className="pl-24 border" {...field} />
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
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Password</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
