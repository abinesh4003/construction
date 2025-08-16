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
    location,
    ProjectType: timeframe = 'Residential',
    } = formData;

    // Validate required fields
    if (!name  || !phone) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, projectType)" },
        { status: 400 }
      );
    }

  

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
      replyTo:'',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      text: `
        Contact Form Submission
        ----------------------
        Name: ${name}
        Phone: ${phone}
        Location: ${location}
        ProjectType: ${timeframe}
      `,
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>ProjectType:</strong> ${timeframe}</p>
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