import { Answer, QuestionPost } from '@prisma/client'
import React from 'react'

const AnswersContent = async ({answers}:{answers:Answer[]}) => {
  return (
    <div>
        {answers.length}
    </div>
  )
}

export default AnswersContent