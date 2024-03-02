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