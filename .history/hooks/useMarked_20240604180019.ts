"use client"


import { getCurrentUser } from "@/helpers/get-user"
import { User } from "@prisma/client"
import { marked } from "marked"
import { useEffect, useState } from "react"

export const useMarked = (answer:string) => {
    const [msg,setMsg] = useState<string>()

    useEffect(() => {
        async function markedIt(){
            const message = await marked(answer)
            setMsg(message)
        }

        markedIt()
    },[])

    

    return msg;
}
