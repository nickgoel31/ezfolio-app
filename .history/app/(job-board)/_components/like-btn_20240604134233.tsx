import { ThumbsUp } from 'lucide-react'
import React from 'react'

const LikeBtn = ({currentUser,questionId}) => {
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