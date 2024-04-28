import React from 'react'

const AdminRedirect = async () => {

    const user = await getCurrentUser()
    if(!user) redirect("/login")

    redirect(`/d/${user.id}`)

  return (
    <div></div>
  )
}

export default AdminRedirect