"use client"

export const useCurrentUserpage = () => {
    const [userpage,setUserpage] = useState<UserPage>()

    useEffect(() => {
        async function getuserpage(){
            const user = await getCurrentUser()
            if(!user) return;
            let curUserpage = await getUserpageByUserId(user.username)
            if(!curUserpage) return;

            setUserpage(curUserpage)
        }

        getuserpage()
    },[])

    

    return userpage;
}
