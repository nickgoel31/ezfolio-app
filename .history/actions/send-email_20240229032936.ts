"use server"
import nodemailer from "nodemailer"

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

export const sendPasswordResetEmail = async ({email,token}:{email:string,token:string}) => {
    try {
        await transporter.sendMail({
            from:{
                name: "DevLinker",
                address: process.env.EMAIL_USER || "harshgoel2004@gmail.com",
            },
            to: `${email}`,
            subject: "Password Reset Link | DevLinker",
            text: `Below is the password reset link for your account in DevLinker`,
            html: `
                <a href='http://localhost:3000/forgot-password/reset?reset_token=${token}'>Click here</a>
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