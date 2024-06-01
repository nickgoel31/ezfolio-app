import { getQuestionPostById } from '@/helpers/get-question-post';
import React from 'react'

const QuestionPage = async ({params}:{params:{questionId:string}}) => {

  const {questionId} = params
  if(!questionId) return;

  const question = await getQuestionPostById(questionId)
  return (
    <div className='w-full h-full px-6 relative'>

      <div className='space-y-10 lg:px-24 '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold leading-normal'>Ask a question</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage