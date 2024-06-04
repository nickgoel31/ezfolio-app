
import { templates } from '../page'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'

const resumeSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
      email: z.string().email({
          message: "Invalid email address.",
      }),
      phone: z.string().min(10, {
        message: "Phone number should have at least 10 digits.",
      }),
      address: z.string().min(5, {
        message: "Address should have at least 5 characters.",
      }),
      summary: z.string().min(10, {
        message: "Summary should have at least 10 characters.",
      }),
      fatherName: z.string().min(2, {
          message: "Father Name should have at least 2 characters.",
        }),
  })

const ResumeGeneratorFormNSIU = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1)
  return (
    <div className='flex flex-wrap items-center gap-4'>
        {templates.map((temp) => (
            <div key={temp.id} onClick={() => setSelectedTemplate(temp.id)} className={cn('border rounded-lg w-28 h-40 cursor-pointer flex items-center justify-center p-4', selectedTemplate === temp.id && 'outline outline-offset-2 outline-violet-500')}>
                <p className='text-center font-medium text-sm text-muted-foreground'>{temp.name}</p>
            </div>
        ))}
    </div>
  )
}

export default ResumeGeneratorFormNSIU