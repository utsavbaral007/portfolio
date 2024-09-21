import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/app/util/nodemailer";

export async function POST(req) {
  const data = await req.json();

  try {
    const info = await new Promise((resolve, reject) => {
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
        (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        }
      );
    });

    // Return a success response
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully!",
      info,
    });
  } catch (error) {
    // Handle the error and return an error response
    return NextResponse.json({
      status: 400,
      message: "Error sending email",
      error: error.message,
    });
  }
}
