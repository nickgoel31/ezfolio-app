import { getUserpageByUserId } from "@/actions/userpage/get-userpage";
import { getExperienceByUserPageId } from "@/helpers/get-exp";
import { getProjectByUserPageId } from "@/helpers/get-project";
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"
import { UserPage } from "@prisma/client";

export const userSuggestionsAlgorithm = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const currentUserPage = await getUserpageByUserId(currentUser.username)
    if(!currentUserPage) return;

    const experiences = await getExperienceByUserPageId(currentUserPage.id)
    const projects = await getProjectByUserPageId(currentUserPage.id)
    const currentUserSkills = currentUserPage.skills

    const similarUsers:UserPage[] = [];

    // Find users with similar skills
    const usersWithSimilarSkills: = await findUsersBySkills(currentUserSkills);
    similarUsers.push(...usersWithSimilarSkills);

    
}


async function findUsersBySkills (currentUserSkills:string[]){
    const users = await db.userPage.findMany()
    const similarUsers = []

    for (const user of users){
        const loopUser = user
        const userSkills = user.skills
        const commonSkills = userSkills.filter(skill => currentUserSkills.includes(skill))
        const similarityScore = commonSkills.length > 0 ? commonSkills.length / userSkills.length : 0

        if(similarityScore > 0.5){
            similarUsers.push([...loopUser])
        }
    }

    return similarUsers
}