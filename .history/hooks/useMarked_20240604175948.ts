"use client"


import { getCurrentUser } from "@/helpers/get-user"
import { User } from "@prisma/client"
import { useEffect, useState } from "react"

export const useMarked = (answer:string) => {
    const [msg,setMsg] = useState<string>()

    useEffect(() => {
        async function markedIt(){
            await marked()
        }

        getuser()
    },[])

    

    return user;
}
