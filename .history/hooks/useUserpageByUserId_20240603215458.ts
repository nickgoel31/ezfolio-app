"use client"


import { getUserpageByUserId } from "@/actions/userpage/get-userpage"
import { getCurrentUser } from "@/helpers/get-user"
import { UserPageType } from "@/types"
import { User, UserPage } from "@prisma/client"
import { useEffect, useState } from "react"

export const useUserpageByUserId = (username:string) => {
    const [userpage,setUserpage] = useState<UserPageType | null>(null)

    useEffect(() => {
        async function getuserpage(){
            let curUserpage = await getUserpageByUserId(username)
            if(!curUserpage) return;

            setUserpage(curUserpage)
        }

        getuserpage()
    },[username])

    

    return userpage;
}

export const useCurrentUserpage = () => {
  const [userpage, setUserpage] = useState<UserPage | null>(null);

  useEffect(() => {
    async function getuserpage() {
      const user = await getCurrentUser();
      if (!user) return;

      let curUserpage = await getUserpageByUserId(user.username);
      if (!curUserpage) return;

      setUserpage(curUserpage);
    }

    getuserpage();
  }, []);

  return userpage;
};

