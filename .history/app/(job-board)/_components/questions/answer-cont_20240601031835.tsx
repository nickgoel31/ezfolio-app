import { Answer, QuestionPost } from '@prisma/client'
import React from 'react'

const AnswersContent = async ({answers}:{answers:Answer[]}) => {
  return (
    <div className='space-y-6  '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-bold leading-normal'>An</h1>
          </div>
        </div>

        {/* <TiptapReadOnly description={question.description} isPostCreator={isPostCreator}/> */}
    </div>
  )
}

export default AnswersContent