import { User } from '@prisma/client'
import React from 'react'

const DangerSettings = ({user}:{user:User}) => {
  return (
    <div id='#danger' className='py-8'>
        <div className="">
        <h1 className="pb-2 text-2xl font-semibold">Danger zone</h1>
        
      </div>
      <hr className="mt-4 mb-8" />

       <section className='space-y-8'>
            {/* Subscription */}
            <div>
                <p className="py-2 text-xl font-semibold">Subscription</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">You are a <span className='font-bold text-blue-500'>Free</span>&nbsp;user</p>
                    <button className="inline-flex text-sm font-semibold text-indigo-500 underline decoration-2">Upgrade to Premium</button>
                </div>
            </div>
       </section>
    </div>
  )
}

export default DangerSettings