import { faqsList } from '@/data'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FaqSection = () => {
  return (
    <div id='faqs' className='w-full flex flex-col items-center space-y-7 mb-28 mt-10'>
        <div className='text-center space-y-1 text-foreground'>
            <h2 className='font-bold text-4xl'>Faqs</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Get answer of most of your questions
            </p>
        </div>

        <Accordion type="single" collapsible className='w-full mx-auto max-w-screen-md flex flex-col items-center justify-start gap-4'>

            {faqsList.map((faq, index) => (
                <AccordionItem key={index} value={faq.question}>
                    <AccordionTrigger>
                    <div key={index} className='border dark:border-[#131313] bg-gradient-to-tr from-[#34313d13] dark:from-[#dfd5ff07] w-full p-3 rounded-lg px-6'>
                    {faq.question}
                        </div>
                    </AccordionTrigger>
                </AccordionItem>
            ))}

        </Accordion>


    </div>
  )
}

export default FaqSection