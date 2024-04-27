"use client"

import { updateSocialsOnUserPage } from '@/actions/userpage/edit'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { UserPageType } from '@/types'
import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialsInfo = ({userPage}:{userPage:UserPageType}) => {

    const [githubUrl,setGithubUrl] = useState<string | null>(userPage.githubUrl)
    const [instagramUrl,setInstagramUrl] = useState<string | null>(userPage.instagramUrl)
    const [linkedinUrl,setLinkedinUrl] = useState<string | null>(userPage.linkedinUrl)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { toast } = useToast()

    const handleSocialLinks = () => {
        setIsSubmitting(true)
        updateSocialsOnUserPage(githubUrl, instagramUrl, linkedinUrl,userPage.id);

        setTimeout(() => {
            setIsSubmitting(false)
        },1500)
    }

  return (
    <div className='w-full flex flex-col space-y-4'>
        <div className='space-y-1 flex items-center justify-between w-full'>
            <h5 className='text-xl font-semibold'>Social Links</h5>
        </div>

        <div className='space-y-4'>
            <div className='grid grid-cols-1 gap-4  w-full lg:grid-cols-2'>
                <div className='border shadow-sm rounded-xl p-3 px-5 w-full space-y-2 relative bg-background'>
                    <div className='flex items-center gap-2'>
                        <FaGithub size={17}/>
                        <h6 className='font-medium'>Github</h6>
                    </div>
                    <Input className='bg-foreground/5' defaultValue={githubUrl || ""} placeholder='https://www.github.com/nickgoel31' type='url' onChange={(e) => setGithubUrl(e.target.value)}/>
                </div>

                <div className='border shadow-sm rounded-xl p-3 px-5 bg-background w-full space-y-1 relative'>
                    <div className='flex items-center gap-2'>
                        <FaLinkedin size={17}/>
                        <h6 className='font-medium'>Linkedin</h6>
                    </div>
                    <Input className=' bg-foreground/5' defaultValue={linkedinUrl || ""} placeholder='https://www.linkedin.com/nickgoel31' type='url' onChange={(e) => setLinkedinUrl(e.target.value)}/>
                </div>

                <div className='border shadow-sm rounded-xl p-3 px-5 bg-background w-full space-y-1 relative'>
                    <div className='flex items-center gap-2'>
                        <FaInstagram size={17}/>
                        <h6 className='font-medium'>Instagram</h6>
                    </div>
                    <Input className='bg-foreground/5' defaultValue={instagramUrl || ""} placeholder='https://www.instagram.com/nickgoel31' type='url' onChange={(e) => setInstagramUrl(e.target.value)}/>
                </div>    
            </div>

            <div className='w-full '>
                <Button disabled={isSubmitting} onClick={handleSocialLinks}>Save social links</Button>
            </div>
        </div>

    </div>
  )
}

export default SocialsInfo