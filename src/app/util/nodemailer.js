const nodemailer = require("nodemailer");
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
    extName: ".handlebars",
    partialsDir: path.resolve(__dirname, "util"),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "util"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));
