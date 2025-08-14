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
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      service, 
      budget, 
      details 
    } = formData;

    // Validate required fields
    if (!firstName || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields (firstName, email, details)" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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

    // Format budget for display
    const budgetRanges = {
      "10k-25k": "$10,000 - $25,000",
      "25k-50k": "$25,000 - $50,000", 
      "50k-100k": "$50,000 - $100,000",
      "100k+": "$100,000+"
    };
    const formattedBudget = budget ? (budgetRanges[budget] || budget) : 'Not specified';

    // Email options with all form data
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New contact from ${firstName}${lastName ? ' ' + lastName : ''} - ${service || 'General Inquiry'}`,
      text: `
        Contact Form Submission
        ----------------------
        Name: ${firstName} ${lastName || ''}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        
        Service Interested In: ${service || 'Not specified'}
        Budget: ${formattedBudget}
        
        Message:
        ${details}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${firstName} ${lastName || ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Budget:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formattedBudget}</td>
            </tr>
          </table>
          
          <h3 style="color: #2563eb; margin-top: 20px;">Message Details:</h3>
          <div style="white-space: pre-line; background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${details}
          </div>
        </div>
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