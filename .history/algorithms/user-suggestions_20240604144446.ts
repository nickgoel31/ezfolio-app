import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"

export const userSuggestionsAlgorithm = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const currentUserPage = await getUser
    
}