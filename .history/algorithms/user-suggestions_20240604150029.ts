import { getUserpageByUserId } from "@/actions/userpage/get-userpage";
import { getExperienceByUserPageId } from "@/helpers/get-exp";
import { getProjectByUserPageId } from "@/helpers/get-project";
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"
import { Experience, UserPage } from "@prisma/client";

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
    const usersWithSimilarSkills:UserPage[] = await findUsersBySkills(currentUserSkills);
    similarUsers.push(...usersWithSimilarSkills);

    for (const experience of experiences) {
        const usersWithSimilarExperience = await findUsersByExperience(experiences);
        similarUsers.push(...usersWithSimilarExperience);
    }

    for (const project of projects) {
        const usersWithSimilarProject = await findUsersByProject(project);
        similarUsers.push(...usersWithSimilarProject);
    }

    
}


async function findUsersBySkills (currentUserSkills:string[]){
    const users = await db.userPage.findMany()
    const similarUsers:UserPage[] = []

    for (const user of users){
        const loopUser = user
        const userSkills = user.skills
        const commonSkills = userSkills.filter(skill => currentUserSkills.includes(skill))
        const similarityScore = commonSkills.length > 0 ? commonSkills.length / userSkills.length : 0

        if(similarityScore > 0.5){
            similarUsers.push(loopUser)
        }
    }

    return similarUsers
}

async function findUsersByExperience (experience:Experience[]){
    const users = await db.userPage.findMany()
    const similarUsers:UserPage[] = []

    for (const user of users){
        const loopUser = user
        const userExperience = await getExperienceByUserPageId(user.id)
        const commonExperience = userExperience.filter(exp => exp.title === experience.title)
        const similarityScore = commonExperience.length > 0 ? 1 : 0

        if(similarityScore > 0.5){
            similarUsers.push(loopUser)
        }
    }

    return similarUsers
}