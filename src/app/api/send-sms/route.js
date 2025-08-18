// app/api/send-sms/route.js

import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  try {
    const data = await req.json();
    const to=process.env.RECEVER_PHONE_NUMBER;
     console.log("Received data:", { to, data });
    const{name, phone, projectType, message} = data;
    
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    const response = await client.messages.create({
      body:`New Message form Client by submitting the form on the website!\n Name: ${name}\nPhone: ${phone}\nProject Type: ${projectType}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,                                   
    });

    return NextResponse.json({ success: true, sid: response.sid });
  } catch (error) {
    console.error("Twilio SMS Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
