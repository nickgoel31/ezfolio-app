"use client"

import { likeQuestionPostInDB } from '@/actions/question-post/like'
import { User } from '@prisma/client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const LikeBtn = ({currentUser,questionId}:{currentUser:User, questionId:string}) => {
    const [liked,setLiked] = useState<boolean>(false)
    const handleLikePost = () => {
        if(!currentUser) return;
        likeQuestionPostInDB(questionId,currentUser.id)
        .then(d => {
            if(d.success){
                
            }
        })
        setLiked(!liked)
        
      }
  return (
        <div onClick={handleLikePost} className='fixed bottom-10 right-10 font-medium z-[80] p-3 rounded-full bg-foreground text-background cursor-pointer'>
            {liked ? (<ThumbsUp):(<ThumbsUp />)}
        </div>
  )
}

export default LikeBtn