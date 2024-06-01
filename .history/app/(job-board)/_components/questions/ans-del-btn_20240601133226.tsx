import { Trash2 } from 'lucide-react'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

const AnswerDeleteButton = () => {
  return (
    <Dialog>
        <Trash2 size={20} className='text-destructive dark:text-red-500'/>
    </div>
  )
}

export default AnswerDeleteButton