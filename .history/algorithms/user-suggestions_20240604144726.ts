import { getUserpageByUserId } from "@/actions/userpage/get-userpage";
import { getExperienceByUserPageId } from "@/helpers/get-exp";
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"

export const userSuggestionsAlgorithm = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const currentUserPage = await getUserpageByUserId(currentUser.username)
    if(!currentUserPage) return;

    const experiences = await getExperienceByUserPageId(currentUserPage.id)
    const experiences = await getExperienceByUserPageId(currentUserPage.id)
    const experiences = await getExperienceByUserPageId(currentUserPage.id)
    const experiences = await getExperienceByUserPageId(currentUserPage.id)

    if(currentUserPage.skills.length <= 0){
        return {message:"No skills of user"}
    }
    
}