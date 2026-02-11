'use server';
import nodemailer from 'nodemailer';

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Your Gmail
            pass: process.env.GMAIL_APP_PASSWORD, // Your 16-character App Password
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text: message,
            html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}
