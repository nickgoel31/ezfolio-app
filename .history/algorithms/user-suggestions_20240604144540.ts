import { getUserpageByUserId } from "@/actions/userpage/get-userpage";
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"

export const userSuggestionsAlgorithm = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const currentUserPage = await getUserpageByUserId(currentUser.username)
    if(!currentUserPage) return;

    if(currentUserPage.skills <= 0){
        return 
    }
    
}