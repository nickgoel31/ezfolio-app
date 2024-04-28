"use client"

import { deleteAccountFromDatabase } from '@/actions/user/delete-account'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { User } from '@prisma/client'
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog'
import React, { useState } from 'react'

const DangerSettings = ({user}:{user:User}) => {

  const [success,setSuccess] = useState<boolean>(false)

  

  const handleDeleteAccountRequest = () => {
    // Delete account
    setSuccess(false)
    deleteAccountFromDatabase(user.id)
    .then((d) => {
      if(d?.success === "Account Deleted"){
        setSuccess(true)
      }
    })
  }

  return (
    <div id='#danger' className='py-8'>
        <div className="">
        <div className='flex items-center justify-between w-full pb-3'>
          <h1 className=" text-2xl font-semibold">Danger zone</h1>
          <p className="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-200 px-4 py-1 text-rose-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Proceed with caution
          </p>
        </div>
        
        <p className='text-muted-foreground'>
          Make sure you have taken backup of your account in case you ever need to get access to your data. We will completely wipe your data. There is no way to access your account after this action.
        </p>
      </div>
      <hr className="mt-4 mb-8" />

       <section className='space-y-8'>


            {/* Delete account */}
            <div>
                <p className="py-2 text-xl font-semibold">Delete Account</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">Are you <span className='font-bold'>sure?</span></p>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <button className="inline-flex text-sm font-semibold text-red-500 underline decoration-2">Delete</button>
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete your account?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action is irreversible.
                          </AlertDialogDescription>

                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteAccountRequest} className='bg-red-500 text-white'>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
       </section>
    </div>
  )
}

export default DangerSettings