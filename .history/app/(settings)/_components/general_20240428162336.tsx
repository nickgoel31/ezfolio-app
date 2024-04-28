import { cn } from '@/lib/utils'
import { User } from '@prisma/client'
import React from 'react'

const GeneralSettings = ({user}:{user:User}) => {
  return (
    <div className='py-8'>
        <div className="">
        <h1 className="pb-2 text-2xl font-semibold">General settings</h1>
        <p className=" text-muted-foreground">
            Manage your account settings and set email preferences.
        </p>
      </div>
      <hr className="mt-4 mb-8" />

       <section className='space-y-8'>
            {/* Username */}
            <div>
                <p className="py-2 text-xl font-semibold">Username</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">Your Username is <strong>{user.username}</strong></p>
                    <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                </div>
            </div>

            {/* EMAIL ADDRESS */}
            <div>
                <p className="py-2 text-xl font-semibold">Email Address</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">Your email address is <strong>{user.email}</strong></p>
                    <button disabled className="inline-flex text-sm font-semibold text-blue-600 disabled:text-muted-foreground underline decoration-2">Change</button>
                </div>
            </div>

            {/* EMAIL VERIFIED */}
            <div>
                <p className="py-2 text-xl font-semibold">Email Verification</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">Your email address is <span className={cn(`font-bold`, user.emailVerified ? `text-emerald-500` : `text-de`)}>{user.emailVerified ? `Verified` : `Not Verified`}</span></p>
                </div>
            </div>
       </section>
    </div>
  )
}

export default GeneralSettings