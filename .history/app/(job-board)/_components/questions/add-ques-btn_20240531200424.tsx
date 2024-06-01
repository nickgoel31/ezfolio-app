import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AddQuestionBtn = () => {
  return (
    <Button asChild variant={"outline"} size={"sm"} className='text-xs font-medium'>
        <Link href={'/create-question'}>+ Ask a Question</Link>
    </Button>
  )
}

export default AddQuestionBtn