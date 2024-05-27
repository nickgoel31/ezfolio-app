import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { getAllUserPage } from '@/helpers/get-user'
import { Mail, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { FaPaperPlane } from 'react-icons/fa'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const EzConnectDevs = async () => {

    const userPages = await getAllUserPage()
    if(!userPages){
        return <div>Loading...</div>
    }


  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {userPages.slice(0,20).map((user,index) => {
            return (
                <div key={index} className='w-full bg-foreground/[0.02] relative overflow-hidden rounded-lg border border-foreground/5 h-80 p-4 py-6 gap-3 flex flex-col items-center'>
                    <Avatar className='h-16 w-16'>
                        <AvatarFallback>{user.title.charAt(0)}</AvatarFallback>
                        {user.pagePicUrl && <AvatarImage src={user.pagePicUrl}/>}
                    </Avatar>
                    <div className='text-center'>
                        <h1 className='font-medium text-lg'>
                            {user.title}
                        </h1>
                        <p className='text-xs text-muted-foreground'>
                            @{user.username}
                        </p>
                    </div>
    
                    <div className='w-full gap-2 flex flex-col text-sm font-medium pt-2'>
                        <h2>Skills</h2>
                        <div className='flex gap-1 flex-wrap text-xs'>
                            {user.skills.slice(0,3).map((skill,index) => (
                                <span key={index} className='bg-background border border-foreground/5 rounded-full p-1 text-xs px-3'>
                                    {skill}
                                </span>
                            ))}
                            {user.skills.length > 3 && (
                                <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger><p className='bg-background border border-foreground/5 rounded-full p-0.5 text-xs px-1.5 text-muted-foreground'>
                                    +{user.skills.length - 3}
                                </p></TooltipTrigger>
                                  <TooltipContent>
                                    <p>Add to library</p>
                                  </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
    
                        <div className='absolute bottom-6 px-4 left-0 w-full '>
                            <div className='w-full justify-center flex items-center gap-3'>
                                
                                <Button asChild variant={"outline"} className='flex w-full'>
                                    <Link target='_blank' href={`/${user.username}`}>View their profile</Link>
                                </Button>  
                                
                                <Popover>
                                    <PopoverTrigger>
                                        <Button variant={"ghost"} size={"icon"} className='flex w-full'><MoreVertical size={20}/></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className='flex flex-col w-full'>
                                            <Button variant={"ghost"} disabled className='w-full flex items-center justify-start gap-3'><FaPaperPlane />Message them (coming soon)</Button>
                                            {/* <Link>
                                                <Button asChild variant={"ghost"} className='w-full flex items-center justify-start gap-3'><MdMail />Email them</Button>
                                            </Link> */}
                                        </div>
                                    </PopoverContent>
                                </Popover>
    
    
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default EzConnectDevs