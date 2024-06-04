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
import { login, verify2FACodeAndLogin } from "@/actions/auth/login"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { redirect } from "next/navigation"
import { FaLastfmSquare } from "react-icons/fa"
import { useRouter } from "next/navigation"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"




export default function LoginForm() {

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const [OTP,setOTP] = useState<string>("")
  const [twoFADialog,setTwoFADialog] = useState<boolean>(false)
  const [twoFATokenId,setTwoFATokenId] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email:"",
      password:""
    },
  })

  const {isValid} = form.formState

  useEffect(() => {
    if(success === "Logged in!"){
      redirect("/d/redirect")
    }
  },[success])
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setError("")
    setSuccess("")
    setLoading(true)
    await login(values).then(d => {
      setError(d?.error)
      setSuccess(d?.success)
      setLoading(false)
      if(d?.successCode === "SUC_2FA_SENT" && d?.tokenId2FA){
        setTwoFADialog(true)
        setTwoFATokenId(d.tokenId2FA)
      }
    })
  }

  const handle2FAVerification = () => {
    if(OTP.length < 6 || OTP.length > 6) return;
    setLoading(true)

    verify2FACodeAndLogin(OTP, twoFATokenId).then(d => {
      setError(d?.error)
      if(d?.error === "Token Expired! Login again."){
        
      }
      setLoading(false)
    })

    twoFADialog(false)
  }

  return (
    <Form {...form}>
      {error && (
          <div className="border border-red-500 bg-red-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-red-500 flex items-center gap-3 absolute top-5 left-1/2 -translate-x-1/2 z-[100]">
            <AlertTriangle size={20}/>
            {error}
          </div>
        )}

        {success && (
          <div className="border border-emerald-500 bg-emerald-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-emerald-500 flex items-center gap-3 absolute top-5 left-1/2 -translate-x-1/2 z-[100]">
            <CheckCircle2 size={20}/>
            {success}
          </div>
        )}

        {!twoFADialog && (
          <div className="w-full h-full absolute top-0 left-0 z-[60] bg-background/5 backdrop-blur-lg flex items-center justify-center">
            <div className="p-6 w-[90%] max-w-[500px] items-center justify-center flex border bg-background rounded-lg flex-col">
              <h2 className="font-semibold text-3xl text-center leading-normal">Your 6 digit code</h2>
              <p className="text-sm font-medium text-muted-foreground">
                Enter the 6 digit code sent to your email.
              </p>

              <div className="pt-6">
                <InputOTP maxLength={6} onChange={(e) => setOTP(e)}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="pt-6">
                <Button type="button" disabled={OTP.length < 6 || loading} onClick={handle2FAVerification} className="w-full">

                  Verify
                </Button>
              </div>
            </div>
          </div>
        )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full max-w-[400px]">
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

        <Link href={"/forgot-password"} className="text-sm font-medium hover:underline hover:underline-offset-2 pl-1">Forgot password?</Link>
        
        <div className="w-full flex justify-center">
          {loading ? (
            <Button disabled className="w-full">Logging in...</Button>
          ) : (
            <Button type="submit" className="w-full">
              Login to your account
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
