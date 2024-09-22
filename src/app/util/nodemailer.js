import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_USER_EMAIL,
    pass: process.env.NEXT_PUBLIC_USER_PASSWORD,
  },
});

export const mailOptions = {
  to: process.env.NEXT_PUBLIC_USER_EMAIL,
};

const handlebarOptions = {
  viewEngine: {
    dfaultLayout: false,
  },
  viewPath: "src/app/util",
};

transporter.use("compile", hbs(handlebarOptions));
