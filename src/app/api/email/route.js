import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../lib/nodemailer";

export async function POST(req) {
  const data = await req.json();

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          ...mailOptions,
          from: data.email,
          subject: `Let's Collaborate! - ${data.service}`,
          html: `
            <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial,
      Helvetica, sans-serif; } body { display: flex; justify-content: center;
      align-items: center; height: 100vh; } .message-box { border-radius: 8px;
      background-color: rgb(255, 244, 233); padding: 24px; max-width: 700px;
      width: 100%; line-height: 30px; } .footer p{ line-height: 20px; }
    </style>
  </head>
  <body>
    <div class="message-box">
      <h1>Dear Utsav,</h1>
      <br />
      <p>
        ${data.textMessage}
      </p>
      <br />
      <div class="footer">
        <p>Best Regards,</p>
        <p>${data.firstName} ${data.lastName}</p>
        <p>${data.email}</p>
        <p>${data.phoneNumber}</p>
      </div>
    </div>
  </body>
</html>
            
            `,
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
      message: "Failed to send email!",
      error: error.message,
    });
  }
}
