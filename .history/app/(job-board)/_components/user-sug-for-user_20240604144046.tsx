import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const UserSuggestionsForUser = () => {
  return (
    <div className='w-full justify-between items-start relative'>
        <h4 className='font-semibold text-xl'>Suggested</h4>

        // 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>

        <div className='flex gap-4 pt-4'>
            <div  className='w-56 bg-foreground/[0.02] relative overflow-hidden rounded-lg border border-foreground/5 p-4 py-6 gap-3 flex flex-col items-center'>
                        <Avatar className='h-16 w-16'>
                            <AvatarFallback>H</AvatarFallback>
                            {/* <AvatarImage src={user.pagePicUrl}/> */}
                        </Avatar>
                        <div className='text-center'>
                            <h1 className='font-medium text-lg'>
                                Harsh Goel
                            </h1>
                            <p className='text-xs text-muted-foreground'>
                                @harshgoel
                            </p>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default UserSuggestionsForUser