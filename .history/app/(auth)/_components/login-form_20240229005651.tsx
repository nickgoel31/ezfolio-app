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
import { loginFormSchema} from "@/form-schemas"
import { login } from "@/actions/auth/login"
import Link from "next/link"



export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    login(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full max-w-[400px]">
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
        <Button variant={"link"} asChild>
          <Link href={"/forgot-password"}>Forgot password?</Link>
        </Button>
        <div className="w-full flex justify-center">
          <Button type="submit" className="w-full">Login to your account</Button>
        </div>
      </form>
    </Form>
  )
}
