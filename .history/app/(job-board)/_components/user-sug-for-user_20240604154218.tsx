import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { userSuggestionsAlgorithm } from '@/algorithms/user-suggestions'
  

const UserSuggestionsForUser = async () => {
    const suggestedUsers = await userSuggestionsAlgorithm()
    if(!suggestedUsers) return;

  return (
    <div className='w-full justify-between items-start relative'>
        <h4 className='font-semibold text-xl'>Suggested <span className='text-xs text-muted-foreground'>*Vector Embedding in testing (coming soon)</span></h4>

        <Carousel className='pt-4 w-full'>
            <CarouselContent className='space-x-6'>
                {suggestedUsers.map((user) => (
                    <CarouselItem key={user.id} className="2xl:basis-1/ xl:basis-1/5 md:basis-1/3 basis-1/1">
                        <div  className='w-56 bg-foreground/[0.02] relative overflow-hidden rounded-lg border border-foreground/5 p-4 py-6 gap-3 flex flex-col items-center'>
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
                        </div>
                    </CarouselItem>
                ))}   
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default UserSuggestionsForUser