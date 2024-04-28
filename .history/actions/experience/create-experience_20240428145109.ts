"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"
const newExperienceSchema = z.object({
    jobTitle: z.string().min(2).max(50),
    jobDesc: z.string().max(256),
    jobOrg: z.string().max(50).min(1),
    startDate: z.date(),
    endDate: z.date().optional()
})

export const createExperienceInDB = async (values:z.infer<typeof newExperienceSchema>,userPageId:string) => {
    const validatedFields = newExperienceSchema.safeParse(values)

    if(!validatedFields.success) return;

    const {jobTitle,jobDesc,jobOrg,startDate,endDate} = validatedFields.data

    await db.experience.create({
        data:{
            userPageId,
            jobTitle,
            jobDesc,
            jobOrg,
            startDate,
            endDate
        }
    })

    revalidatePath("/")
    return {success:true,}
}