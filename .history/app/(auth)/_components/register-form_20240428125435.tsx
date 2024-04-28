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
import { AlertTriangle, CheckCircle2, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const appUrl = "ezfolio.social"



export default function RegisterForm() {

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const [loading, setLoading] = useState<boolean>(false)

  const [isShowPassword, setIsShowPassword] = useState(false)

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
    setLoading(true)
    register(values).then(d => {
      setError(d?.error)
      setSuccess(d?.success)
      if(d.success || d.error) setLoading(false)
    })
  }

  return (
    <Form {...form}>
      {error && (
          <div className="border border-red-500 bg-red-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-red-500 flex items-center gap-3 absolute top-5 left-1/2 -translate-x-1/2">
            <AlertTriangle size={20}/>
            {error}
          </div>
        )}

        {success && (
          <div className="border border-emerald-500 bg-emerald-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-emerald-500 flex items-center gap-3 absolute top-5 left-1/2 -translate-x-1/2">
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
                        <div className="absolute top-0 h-full left-0 flex items-center justify-center px-4 text-muted-foreground text-sm font-medium">{appUrl}/</div>
                        <div className="">
                            <Input placeholder="username" className="pl-[6.85rem] border" {...field} />
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
                    <div className='relative overflow-hidden'>
                        <div onClick={() => setIsShowPassword(!isShowPassword)} className=' h-full p-1 absolute top-0 right-1 rounded flex items-center justify-center cursor-pointer'>
                            {isShowPassword ? <EyeOff size={17}/> : <Eye size={17}/>}
                        </div>
                        <Input type={isShowPassword ? 'text':'password'} placeholder="Enter new password" {...field} />
                    </div>
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />
        <div className="w-full flex justify-center">
        {loading ? (
            <Button disabled className="w-full">Logging in...</Button>
          ) : (
            <Button type="submit" className="w-full" disabled={!isValid}>{
              isValid ? "Login to your account" : "Fill in the form to login"
            }</Button>
          )}
          <Button className="w-full" type="submit">Let&apos;s create your ezfolio</Button>
        </div>

        
      </form>

      
    </Form>
  )
}
