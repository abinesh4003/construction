import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Ensure the request is JSON
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const formData = await request.json();
    const { 
      name,
      phone,
      email,
      projectType,
      message,
    } = formData;

    // Validate required fields
    if (!name || !phone || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, projectType)" },
        { status: 400 }
      );
    }

    // Validate email format
   

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port:465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      },
    });

 
  

    // Email options with all form data
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      text: `
        Contact Form Submission
        ----------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project Type: ${projectType}
        Message: ${message? message : 'No message provided'} 
      `,
      html: `
        <h2>Contact Form Submission</h2>
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
          <tr>
            <td style="padding: 0.5rem; font-weight: bold;">Name:</td>
            <td style="padding: 0.5rem;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; font-weight: bold;">Email:</td>
            <td style="padding: 0.5rem;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; font-weight: bold;">Phone:</td>
            <td style="padding: 0.5rem;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; font-weight: bold;">Project Type:</td>
            <td style="padding: 0.5rem;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; font-weight: bold;">Message:</td>
            <td style="padding: 0.5rem;">${message ? message : 'No message provided'}</td>
          </tr>
        </table>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email",
        details: error.message 
      },
      { status: 500 }
    );
  }
}