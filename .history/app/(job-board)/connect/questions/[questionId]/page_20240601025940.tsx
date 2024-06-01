import QuestionPostContent from '@/app/(job-board)/_components/questions/ques-post-cont';
import { getQuestionPostById } from '@/helpers/get-question-post';
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CreateNewAnswer from '@/app/(job-board)/_components/questions/create-answer-form';


const QuestionPage = async ({params}:{params:{questionId:string}}) => {

  const {questionId} = params
  if(!questionId) return;

  const question = await getQuestionPostById(questionId)
  if(!question) return;

  return (
    <div className='w-full h-full px-6 relative space-y-4 lg:px-24'>
      <Breadcrumb className='w-full flex items-center justify-center'>
        <BreadcrumbList className=''>
          <BreadcrumbItem>
            <BreadcrumbLink href="/connect">Connect</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/connect/questions">Questions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{question.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <QuestionPostContent question={question}/>

      <CreateNewAnswer />

      {/* <AnswersContent /> */}
    </div>
  )
}

export default QuestionPage