import React from 'react'

const TFAPage = () => {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
  
    const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
      resolver: zodResolver(resetPasswordFormSchema),
      defaultValues: {
        email: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
      setError("")
      setSuccess("")
      setLoading(true)
      sendResetPasswordLink(values).then(d => {
        setError(d?.error) 
        setSuccess(d?.success)
        setLoading(false)
      })
    }
  
    return (
      <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
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
                {loading ? (
                  <Button disabled className="w-full">Sending email...</Button>
                ):(
                  <Button type="submit" className="w-full">Send reset link</Button>
                )}
              </div>
            </form>
          </Form>
          
          
  
          <Button variant={"link"} asChild>
            <Link href={"/login"}>Back to login</Link>
          </Button>
  
          {error && (
            <div className="border border-red-500 bg-red-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-red-500 flex items-center gap-3">
              <AlertTriangle size={20}/>
              {error}
            </div>
          )}
  
          {success && (
            <div className="border border-emerald-500 bg-emerald-500/10 p-4 rounded max-w-[400px] text-sm font-medium text-emerald-500 flex items-center gap-3">
              <CheckCircle size={20}/>
              {success}
            </div>
          )}
  
      </div>
}

export default TFAPage