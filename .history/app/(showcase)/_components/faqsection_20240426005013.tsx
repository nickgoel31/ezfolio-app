import { faqsList } from '@/data'
import React from 'react'

const FaqSection = () => {
  return (
    <div id='faqs' className='w-full flex flex-col items-center space-y-7 mb-20'>
        <div className='text-center space-y-1 text-foreground'>
            <h2 className='font-bold text-4xl'>Faqs</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Get answer of most of your questions
            </p>
        </div>

        <div className='w-full mx-auto max-w-screen-md flex flex-col items-center justify-start gap-7'>

            {faqsList.map((faq, index) => ())}

        </div>


    </div>
  )
}

export default FaqSection