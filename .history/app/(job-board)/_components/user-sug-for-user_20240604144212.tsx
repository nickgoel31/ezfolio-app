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

        <Carousel className='pt-4 w-full'>
            <CarouselContent className='space-x-4'>
                <CarouselItem className="basis-1/5">
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
                </CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
                <CarouselItem className="basis-1/5">...</CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
  )
}

export default UserSuggestionsForUser