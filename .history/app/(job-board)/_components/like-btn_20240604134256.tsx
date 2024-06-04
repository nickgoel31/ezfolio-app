import { likeQuestionPostInDB } from '@/actions/question-post/like'
import { User } from '@prisma/client'
import { ThumbsUp } from 'lucide-react'
import React from 'react'

const LikeBtn = ({currentUser,questionId}:{currentUser:User, questionId:string}) => {
    const handleLikePost = () => {
        if(!currentUser) return;
        likeQuestionPostInDB(questionId,currentUser.id)
      }
  return (
    <>
        {currentUser && (
            <div onClick={handleLikePost} className='fixed bottom-10 right-10 z-[80] p-3 rounded-full bg-foreground text-background cursor-pointer'>
            <ThumbsUp />
            </div>
        )}
    </>
  )
}

export default LikeBtn