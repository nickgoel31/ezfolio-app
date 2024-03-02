"use client"

import { updateEmailVerified } from "@/actions/user/update-user-password";
import { getEmailVerificationTokenByToken } from "@/helpers/get-email-verification";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

interface VerifyEmailPageProps {
    success: string | null;
    error: string | null;
}

const VerifyEmailPage = ({ success, error }: VerifyEmailPageProps) => {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <div className='w-full h-full flex flex-col items-center justify-center space-y-5'>
                <div className='space-y-2 text-center pb-2'>
                    <h1 className='font-bold text-3xl'>Verifying email</h1>
                    <p className='text-muted-foreground text-sm font-medium'>
                        Please wait while we verify your email address.
                    </p>
                </div>
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#000000"
                    radius="9"
                    ariaLabel="three-dots-loading"
                />
            </div>
        );
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center space-y-5'>
            <div className='space-y-2 text-center pb-2'>
                <h1 className='font-bold text-3xl'>Verifying email</h1>
                <p className='text-muted-foreground text-sm font-medium'>
                    Please wait while we verify your email address.
                </p>
            </div>

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

export async function getServerSideProps(context: any) {
    const searchParams = new URLSearchParams(context.req.url.split('?')[1]);
    const verificationToken = searchParams.get("email_verify_token");

    if (!verificationToken) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const emailVerificationTokenFromDB = await getEmailVerificationTokenByToken(verificationToken);

    if (!emailVerificationTokenFromDB) {
        return {
            props: {
                success: null,
                error: "Invalid verification token",
            },
        };
    }

    try {
        await updateEmailVerified(emailVerificationTokenFromDB.userEmail, emailVerificationTokenFromDB.token);
        return {
            props: {
                success: "Email verified successfully",
                error: null,
            },
        };
    } catch (error) {
        return {
            props: {
                success: null,
                error: "An error occurred while verifying email",
            },
        };
    }
}
