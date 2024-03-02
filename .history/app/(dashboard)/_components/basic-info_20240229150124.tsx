"use client"

import { editUserPageBio, editUserPageTitle } from '@/actions/userpage/edit'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Check, Edit, Edit2, Edit3 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    username:string,
    pageTitle:string,
    pageBio:string,
    pagePicUrl:string | undefined | null,
}

const BasicInfo = ({username,pageTitle,pageBio,pagePicUrl}:Props) => {
    const [editTitleMode,setEditTitleMode] = useState(false)
    const [pageTitleState,setPageTitleState] = useState<string>(pageTitle)

    const [editBioMode,setEditBioMode] = useState(false)
    const [pageBioState,setPageBioState] = useState<string>(pageBio)

    const handleUpdateTitle = () => {
        setEditTitleMode(!editTitleMode)
        editUserPageTitle(pageTitleState,username)
    }

    const handleUpdateBio = () => {
        setEditBioMode(!editBioMode)
        editUserPageBio(pageBioState,username)
    }

  return (
    <div className='w-full space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='border shadow-sm rounded-xl p-5 bg-background w-full '>
                <h4 className='text-xl font-medium'>Page Picture</h4>

                {pagePicUrl ? (
                    <Image alt='Page pic' src={pagePicUrl} width={1000} height={1000} />
                ) : (
                    <div className='flex items-center justify-center w-full h-40 rounded-xl'>
                        <p className='text-muted-foreground font-medium text-sm'>No picture uploaded yet</p>
                    </div>
                )}
            </div>

            <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
                <h4 className='text-xl font-medium'>Page Title</h4>
                <div className='flex items-center justify-between w-full gap-3'>
                    {!editTitleMode ? (
                        <p className='italic font-medium'>{pageTitleState}</p>
                    ):(
                        <Input defaultValue={pageTitleState} onChange={(e) => setPageTitleState(e.target.value)}/>
                    )}
                    {!editTitleMode ? (
                        <Edit onClick={() => setEditTitleMode(!editTitleMode)} className='cursor-pointer' size={18} />
                    ):(
                        <Check onClick={handleUpdateTitle} className='cursor-pointer' size={18} />
                    )}
                </div>
            </div>
        </div>

        <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <h4 className='text-xl font-medium'>Page Bio</h4>
            <div className='flex items-center gap-4 justify-between'>
                {!editBioMode ? (
                    <p className='text-sm '>{pageBio}</p>
                ):(
                    <Textarea defaultValue={pageBioState} onChange={(e) => setPageBioState(e.target.value)}/>
                )}
                {!editBioMode ? (
                            <Edit onClick={() => setEditBioMode(!editBioMode)} className='cursor-pointer' size={18} />
                        ):(
                            <Check onClick={handleUpdateBio} className='cursor-pointer' size={18} />
                )}
            </div>
        </div>
    </div>
  )
}

export default BasicInfo