import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonSection = () => {
  return (
    <div className='w-full space-y-4'>
        <Skeleton className='w-full h-6 animate-pulse'/>
    </div>
  )
}

export default SkeletonSection