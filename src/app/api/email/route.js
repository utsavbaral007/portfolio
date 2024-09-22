import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/app/util/nodemailer";

export async function POST(req) {
  const data = await req.json();

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
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
        },
        (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Failed to send email.",
      error: error.message,
    });
  }
}
