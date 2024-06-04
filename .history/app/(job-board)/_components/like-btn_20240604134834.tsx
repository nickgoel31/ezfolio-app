"use client"

import { likeQuestionPostInDB } from '@/actions/question-post/like'
import { cn } from '@/lib/utils'
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
        <div onClick={handleLikePost} className={cn('fixed bottom-10 right-10 font-medium z-[80] p-3 rounded-full bg-foreground text-background cursor-pointer', liked && 'bg-violet-500 text-foreground')}>
            {liked ? (<FaThumbsUp size={}/>):(<ThumbsUp size={22}/>)}
        </div>
  )
}

export default LikeBtn