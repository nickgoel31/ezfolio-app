import Tiptap from '@/components/tiptap'
import React from 'react'

const CreateNewAnswer = () => {
    const form = useForm<z.infer<typeof questionPostSchema>>({
        resolver: zodResolver(questionPostSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })
    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof questionPostSchema>) {
        if(!user) return
        const newPost = await createQuestionPostInDB(values,user.id)
        if(!newPost) return {error:"Error in creating Posts"};
        redirect(`/connect/questions/${newPost.id}`)
    }
  return (
    <div>
        <h3 className='font-medium text-lg'>Have an answer to this question?</h3>

        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Sample title" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Tiptap description={defaultDesc} onChange={field.onChange}/>
                            </FormControl>
                            <FormDescription>
                                Right click inside the textarea to access formatting options
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
    </div>
  )
}

export default CreateNewAnswer