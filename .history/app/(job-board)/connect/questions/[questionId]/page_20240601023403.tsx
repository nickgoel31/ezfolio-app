import { getQuestionPostById } from '@/helpers/get-question-post';
import React from 'react'

const QuestionPage = async ({params}:{params:{questionId:string}}) => {

  const {questionId} = params
  if(!questionId) return;

  const question = await getQuestionPostById(questionId)
  if(!question) return;

  return (
    <div className='w-full h-full px-6 relative'>
      <QuestionContent
    </div>
  )
}

export default QuestionPage