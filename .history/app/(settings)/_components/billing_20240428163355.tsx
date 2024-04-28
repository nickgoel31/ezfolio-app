import React from 'react'

const BillingSettings = () => {
  return (
    <div id='#general' className='py-8'>
        <div className="">
        <h1 className="pb-2 text-2xl font-semibold">Billing settings</h1>
        <p className=" text-muted-foreground">
            Manage 
        </p>
      </div>
      <hr className="mt-4 mb-8" />

       <section className='space-y-8'>
            {/* Change Password */}
            <div>
                <p className="py-2 text-xl font-semibold">Password</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-muted-foreground">Reset or Change your password?</p>
                    <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                </div>
            </div>
       </section>
    </div>
  )
}

export default BillingSettings