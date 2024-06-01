import { Trash2 } from 'lucide-react'
import React from 'react'

const AnswerDeleteButton = () => {
  return (
    <div>
        <Trash2 size={20} className='text-destructive dark:text-red-500'/>
    </div>
  )
}

export default AnswerDeleteButton