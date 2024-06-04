import QuestionPostContent from '@/app/(job-board)/_components/questions/ques-post-cont';
import { getQuestionPostById } from '@/helpers/get-question-post';
import React, { Suspense } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CreateNewAnswer from '@/app/(job-board)/_components/questions/create-answer-form';
import AnswersContent from '@/app/(job-board)/_components/questions/answer-cont';
import { getAnswersByQuestionPostId } from '@/helpers/get-answer';
import { getCurrentUser } from '@/helpers/get-user';
import {AnswerByAI, AnswerByAILoading } from '@/app/(job-board)/_components/ans-by-ai';


const QuestionPage = async ({params}:{params:{questionId:string}}) => {
  
  const currentUser = await getCurrentUser()
  if(!currentUser) console.log("User not signed in!")

  const {questionId} = params
  if(!questionId) return;

  const question = await getQuestionPostById(questionId)
  if(!question) return;

  const answers = await getAnswersByQuestionPostId(questionId)

  return (
    <div>
      
    </div>
  )
}

export default QuestionPage