"use server"
import nodemailer from "nodemailer"

const appLink = process.env.APP_LINK || "https://ezfolio-app.vercel.app/"

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS,
    },
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

export const sendPasswordResetEmail = async (email:string,token:string) => {
    try {
        await transporter.sendMail({
            from:{
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
        })
        console.log("EMAIL SENT SUCCESSFULLY")
    } catch (error) {
        console.log(error)
    }
}

export const sendEmailVerificationEmailNodemailer = async (email:string,token:string) => {
    try {
        await transporter.sendMail({
            from:{
                name: "Ezfolio Support",
                address: process.env.EMAIL_USER || "thewalkingjumbo@gmail.com",
            },
            to: `${email}`,
            subject: "Email Verification Link | Ezfolio",
            text: `Below is the email verification link for your account in DevLinker`,
            html: `
                <a href='http://localhost:3000/verify-email?email_verify_token=${token}'>Click here</a>
                <p></p>
                <br/>
                <h4><i>THIS IS AN AUTOMATED MAIL! PLEASE DO NOT REPLY</i></h4>
            `
        })
        console.log("EMAIL SENT SUCCESSFULLY")
    } catch (error) {
        console.log(error)
    }
}