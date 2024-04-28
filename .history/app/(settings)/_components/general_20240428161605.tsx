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

      <div>
        <p className="py-2 text-xl font-semibold">Profile</p>
        <div className="flex items-center">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            <label htmlFor="login-username">
              <span className="text-sm text-gray-500">Username</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="text" id="login-username" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Username" />
              </div>
            </label>
            <label htmlFor="login-email">
              <span className="text-sm text-gray-500">Email Address</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email Address" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralSettings