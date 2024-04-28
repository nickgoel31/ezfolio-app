import React from 'react'

const AdminRedirect = () => {

    const user = await getCurrentUser()
    if(!user) redirect("/login")

    redirect(`/d/${user.id}`)

  return (
    <div></div>
  )
}

export default AdminRedirect