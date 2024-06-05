import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonSection = () => {
  return (
    <div className='w-full space-y-4'>
        <Skeleton className='w-full h-3 animate-share-open'/>
    </div>
  )
}

export default SkeletonSection