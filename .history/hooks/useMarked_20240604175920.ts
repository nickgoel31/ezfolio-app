"use client"


import { getCurrentUser } from "@/helpers/get-user"
import { User } from "@prisma/client"
import { useEffect, useState } from "react"

export const useMarked = (answer:string) => {
    const [msg,setMsg] = useState<User>()

    useEffect(() => {
        async function getuser(){
            let curUser = await getCurrentUser()
            if(!curUser) return;

            setUser(curUser)
        }

        getuser()
    },[])

    

    return user;
}
