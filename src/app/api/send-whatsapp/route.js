// app/api/send-whatsapp/route.js  (Next.js 13+ with App Router)

import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  try {
    const data = await req.json();
    const to=process.env.RECEVER_PHONE_NUMBER;
    console.log("Received data:", { to, data });
    const{name, phone, ProjectType, message} = data;
    // Load env vars
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    // Send WhatsApp message
    const response = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${to}`,          // Example: whatsapp:+919876543210
      body: `New Message from Client by submitting the form on the website!\n Name: ${name}\nPhone: ${phone}\nProject Type: ${ProjectType}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, sid: response.sid });
  } catch (error) {
    console.error("Twilio Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
