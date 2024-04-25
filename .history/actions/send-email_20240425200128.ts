import nodemailer from "nodemailer";

const appLink = process.env.APP_LINK || "https://ezfolio-app.vercel.app/";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS,
    },
});

export const sendPasswordResetEmail = async (email, token) => {
    try {
        await transporter.sendMail({
            from: {
                name: "Ezfolio Support",
                address: process.env.EMAIL_USER || "thewalkingjumbo@gmail.com",
            },
            to: `${email}`,
            subject: "Password Reset Link | Ezfolio",
            text: `Below is the password reset link for your account in DevLinker`,
            html: `
                <div>
                    <h2>Password reset</h2>
                    <p>Click below link to reset password</p>
                    <a href='${appLink}/forgot-password/reset?reset_token=${token}'>Click here</a>
                </div>
                <br/>
                <h4><i>THIS IS AN AUTOMATED MAIL! PLEASE DO NOT REPLY</i></h4>
            `,
        });
        console.log("EMAIL SENT SUCCESSFULLY");
    } catch (error) {
        console.error("Error sending password reset email:", error);
    }
};

export const sendEmailVerificationEmailNodemailer = async (email, token) => {
    try {
        await transporter.sendMail({
            from: {
                name: "Ezfolio Support",
                address: process.env.EMAIL_USER || "thewalkingjumbo@gmail.com",
            },
            to: `${email}`,
            subject: "Email Verification Link | Ezfolio",
            text: `Below is the email verification link for your account in DevLinker`,
            html: `
                <a href='${appLink}/verify-email?email_verify_token=${token}'>Click here</a>
                <p></p>
                <br/>
                <h4><i>THIS IS AN AUTOMATED MAIL! PLEASE DO NOT REPLY</i></h4>
            `,
        });
        console.log("EMAIL SENT SUCCESSFULLY");
    } catch (error) {
        console.error("Error sending email verification email:", error);
    }
};
