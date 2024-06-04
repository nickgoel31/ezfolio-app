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
  return (
    <div className='w-full justify-between items-start relative'>
        <h4 className='font-semibold text-xl'>Suggested <span className='text-xs text-muted-foreground'>*Vector Embedding in testing (coming soon)</span></h4>

        <Carousel className='pt-4 w-full'>
            <CarouselContent className='space-x-6'>
                {s}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default UserSuggestionsForUser