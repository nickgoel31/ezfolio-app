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
import { deleteAnswerFromDatabase } from '@/actions/question-post/answer/delete'
  

const AnswerDeleteButton = ({answerId}:{answerId:string}) => {
    const handleDeleteAnswer = () => {
        deleteAnswerFromDatabase(answerId)
    }

  return (
        <AlertDialog>
            <AlertDialogTrigger><Trash2 size={20} className='text-destructive dark:text-red-500'/></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your answer from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAnswer}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        
  )
}

export default AnswerDeleteButton