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
import { ThumbsUp } from 'lucide-react';
import { likeQuestionPostInDB } from '@/actions/question-post/like';
import LikeBtn from '@/app/(job-board)/_components/like-btn';
import { isPostLikedByUser } from '@/helpers/get-like-ques-post';


const QuestionPage = async ({params}:{params:{questionId:string}}) => {
  
  const currentUser = await getCurrentUser()
  if(!currentUser) console.log("User not signed in!")

  const {questionId} = params
  if(!questionId) return;

  const question = await getQuestionPostById(questionId)
  if(!question) return;

  const answers = await getAnswersByQuestionPostId(questionId)

  e

  if(currentUser){
     = await isPostLikedByUser(currentUser.id, questionId)
  }

  

  return (
    <>
      {currentUser && (
        <LikeBtn currentUser={currentUser} questionId={questionId} />
      )}
      <div className='w-full h-full px-6 relative space-y-5 lg:px-24'>
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

      <Suspense fallback={<p>Loading...</p>}>
        <QuestionPostContent question={question}/>
      </Suspense>

      <div className='pt-6'>
        
        <Suspense fallback={<AnswerByAILoading />}>
          <AnswerByAI question={question} />
        </Suspense>
      </div>

      <div className='px-6'>
        {currentUser ? answers.filter(ans => ans.userId === currentUser?.id).length === 0 && (
          <>
            {currentUser.id !== question.userId && (
              <div className='pt-6'>
                <CreateNewAnswer questionPostId={question.id}/>
              </div>
            )}
          </>
        ):(
          <div className='font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-3 border rounded-lg bg-violet-900/10 border-violet-600/20'>
            Login to answer this question
          </div>
        )}

        <Suspense fallback={<p>Loading...</p>}>
          <div className='pt-6'>
            <AnswersContent answers={answers} />
          </div>
        </Suspense>

        

        <div className='pb-14 pt-14'>
          <h2 className='font-semibold text-2xl'>Related Questions</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default QuestionPage