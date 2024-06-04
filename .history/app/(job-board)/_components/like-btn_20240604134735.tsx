"use client"

import { likeQuestionPostInDB } from '@/actions/question-post/like'
import { User } from '@prisma/client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import { FaThumbsUp } from 'react-icons/fa'

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
        <div onClick={handleLikePost} className={cn}>
            {liked ? (<FaThumbsUp />):(<ThumbsUp />)}
        </div>
  )
}

export default LikeBtn