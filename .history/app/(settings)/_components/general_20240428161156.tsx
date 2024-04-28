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
    </div>
  )
}

export default GeneralSettings