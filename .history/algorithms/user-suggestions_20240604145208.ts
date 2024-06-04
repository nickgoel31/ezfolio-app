import { getUserpageByUserId } from "@/actions/userpage/get-userpage";
import { getExperienceByUserPageId } from "@/helpers/get-exp";
import { getProjectByUserPageId } from "@/helpers/get-project";
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"

export const userSuggestionsAlgorithm = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const currentUserPage = await getUserpageByUserId(currentUser.username)
    if(!currentUserPage) return;

    const experiences = await getExperienceByUserPageId(currentUserPage.id)
    const projects = await getProjectByUserPageId(currentUserPage.id)
    const currentUserSkills = currentUserPage.skills

    const similarUsers = [];

    // Find users with similar skills
    const usersWithSimilarSkills = await findUsersBySkills(currentUserSkills);
    similarUsers.push(...usersWithSimilarSkills);

    
}


async function findUsersBySkills (currentUserSkills:string[]){
    const users = await db.userPage.fu
}