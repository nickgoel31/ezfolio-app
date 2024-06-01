import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const AddQuestionBtn = () => {
  return (
    <Button variant={"outline"} size={"sm"} className='text-xs font-medium'>
        + Add Question
    </Button>
  )
}

export default AddQuestionBtn