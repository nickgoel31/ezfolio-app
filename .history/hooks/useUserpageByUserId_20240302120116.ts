"use client"


import { getUserpageByUserId } from "@/actions/userpage/get-userpage"
import { getCurrentUser } from "@/helpers/get-user"
import { UserPageType } from "@/types"
import { User, UserPage } from "@prisma/client"
import { useEffect, useState } from "react"

export const useUserpageByUserId = (username:string) => {
    const [userpage,setUserpage] = useState<UserPage | null>()

    useEffect(() => {
        async function getuserpage(){
            let curUserpage = await getUserpageByUserId(username)
            if(!curUserpage) return {data:null, error:"Userpage not found"}

            setUserpage(curUserpage)
        }

        getuserpage()
    },[username])

    

    return {data:userpage, error:null}
}
