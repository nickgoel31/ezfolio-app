"use client"

import { updateEmailVerified } from "@/actions/user/update-user-password";
import { getEmailVerificationTokenByToken } from "@/helpers/get-email-verification";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const VerifyEmailPage = () => {
    const [success, setSuccess] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();

    const searchParams = useSearchParams();
    const verificationToken = searchParams.get("email_verify_token");

    useEffect(() => {
        const fetchData = async () => {
            if (!verificationToken) {
                redirect("/login");
            }

            const emailVerificationTokenFromDB = await getEmailVerificationTokenByToken(verificationToken);

            if (!emailVerificationTokenFromDB) {
                return;
            }

            try {
                updateEmailVerified(emailVerificationTokenFromDB.userEmail, emailVerificationTokenFromDB.token).then((response) => {
                    setSuccess(response?.success);
                    setError(response?.error);
                })
                
            } catch (error) {
                setError("An error occurred while verifying email.");
            }
        };

        fetchData();
    }, [verificationToken]);

    return (
        <div className='w-full h-full flex flex-col items-center justify-center space-y-5'>
            <div className='space-y-2 text-center pb-2'>
                <h1 className='font-bold text-3xl'>Verifying email</h1>
                <p className='text-muted-foreground text-sm font-medium'>
                    Please wait while we verify your email address.
                </p>
            </div>

            {!success && !error && (
                <>
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#000000"
                        radius="9"
                        ariaLabel="three-dots-loading"
                    />
                </>
            )}

            {success && (
                <div className="bg-emerald-500/10 border rounded border-emerald-500 p-4 text-sm font-medium text-emerald-500">
                    {success}
                </div>
            )}

            {error && (
                <div className="bg-red-500/10 border rounded border-red-500 p-4 text-sm font-medium text-red-500">
                    {error}
                </div>
            )}
        </div>
    );
};

export default VerifyEmailPage;



