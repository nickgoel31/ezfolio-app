"use client"

import { getPasswordResetTokenByToken } from "@/helpers/get-password-reset-token"
import { PasswordResetToken } from "@prisma/client"
import { useEffect, useState } from "react"

export const usePasswordResetToken = (tokenId:string) => {
    const [token,setToken] = useState<PasswordResetToken>()

    useEffect(() => {
        async function getTokenByToken(){
            let resetToken = await getPasswordResetTokenByToken(tokenId)
            if(!resetToken) return;

            if(new Date().getTime() - resetToken.createdAt.getTime() > 15 * 1000 * 60)

            setToken(resetToken)
        }

        getTokenByToken()
    },[])

    return token;
}