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

        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/3">

                </CarouselItem>
                <CarouselItem className="basis-1/3">...</CarouselItem>
                <CarouselItem className="basis-1/3">...</CarouselItem>
            </CarouselContent>
        </Carousel>

        <div className='flex gap-4 pt-4'>
            
        </div>
    </div>
  )
}

export default UserSuggestionsForUser