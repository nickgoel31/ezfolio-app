import Tiptap from '@/components/tiptap'
import React from 'react'

const CreateNewAnswer = () => {
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