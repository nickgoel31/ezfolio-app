"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const DeleteProjectInDB = async (id:string) => {
  await db.project.delete({
    where:{
      id
    }
  })

  revalidatePath("/")
}