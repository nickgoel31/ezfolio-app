import React, { useState } from 'react'
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
  import { AlertTriangle, Eye, EyeOff } from "lucide-react"

  import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { changePasswordFormSchema } from '@/form-schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {updateUserPassword} from '@/actions/user/update-user-password'

const ChangePasswordForm = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const form = useForm<z.infer<typeof changePasswordFormSchema>>({
        resolver: zodResolver(changePasswordFormSchema),
        defaultValues: {
          password: "",
        },
    })
     
      // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof changePasswordFormSchema>) {
        updateUserPassword(values);
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
                    <div className='relative overflow-hidden'>
                        <div onClick={() => setIsShowPassword(!isShowPassword)} className=' h-full p-1 absolute top-0 right-1 rounded flex items-center justify-center cursor-pointer'>
                            {isShowPassword ? <EyeOff size={17}/> : <Eye size={17}/>}
                        </div>
                        <Input type={isShowPassword ? 'text':'password'} placeholder="Enter new password" {...field} />
                    </div>
                  </FormControl>
                  {/* <FormDescription>
                    
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button type="submit" className="w-full">Change Password</Button>
            </div>
          </form>
        </Form>
  )
}

export default ChangePasswordForm