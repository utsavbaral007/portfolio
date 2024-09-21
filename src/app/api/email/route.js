import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/app/util/nodemailer";

export async function POST(req) {
  const data = await req.json();
  try {
    transporter.sendMail({
      ...mailOptions,
      from: data.email,
      subject: `Let's Collaborate! - ${data.service}`,
      template: "mailTemplate",
      context: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        textMessage: data.textMessage,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Mail sent successfully!",
    });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error.message });
  }
}
