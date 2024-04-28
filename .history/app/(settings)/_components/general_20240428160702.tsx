import { User } from '@prisma/client'
import React from 'react'

const GeneralSettings = ({user}:{user:User}) => {
  return (
    <div>
        <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">General settings</h1>
        <p className=" text-muted-foreground">
            Manage your account settings and set email preferences.
        </p>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">Email Address</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">Your email address is <strong>{user.email}</strong></p>
        <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
      </div>
    </div>
  )
}

export default GeneralSettings