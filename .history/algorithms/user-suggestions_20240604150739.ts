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

    const similarUsers:string[] = [];

    // Find users with similar skills
    const usersWithSimilarSkills:string[] = await findUsersBySkills(currentUserSkills);
    similarUsers.push(...usersWithSimilarSkills);

    const usersWithSimilarExperience = await findUsersByExperience(experiences);
    similarUsers.push(...usersWithSimilarExperience);


    // for (const project of projects) {
    //     const usersWithSimilarProject = await findUsersByProject(project);
    //     similarUsers.push(...usersWithSimilarProject);
    // }

    // Remove duplicates and the current user from the suggestions
    const uniqueUsers = Array.from(new Set(similarUsers.map(user => user))).filter(id => id !== currentUser.id);

    
}


async function findUsersBySkills (currentUserSkills:string[]){
    const users = await db.userPage.findMany()
    const similarUsers:string[] = []

    for (const user of users){
        const loopUser = user
        const userSkills = user.skills
        const commonSkills = userSkills.filter(skill => currentUserSkills.includes(skill))
        const similarityScore = commonSkills.length > 0 ? commonSkills.length / userSkills.length : 0

        if(similarityScore > 0.5){
            similarUsers.push(loopUser.id)
        }
    }

    return similarUsers
}

async function findUsersByExperience (currentuserExperiences:Experience[]){
    const users = await db.userPage.findMany()
    const similarUsers:string[] = []

    for (const user of users){
        const loopUser = user
        const userExperience = await getExperienceByUserPageId(user.id)
        const commonExperience = userExperience.filter(userExp =>
            currentuserExperiences.some(currentUserExp => currentUserExp.jobTitle === userExp.jobTitle)
        );
        
        const similarityScore = commonExperience.length > 0 ? commonExperience.length / currentuserExperiences.length : 0

        if(similarityScore > 0.5){
            similarUsers.push(loopUser.id)
        }
    }

    return similarUsers
}