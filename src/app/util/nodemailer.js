const nodemailer = require("nodemailer");
import hbs from "nodemailer-express-handlebars";

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

export const hbsOptions = {
  viewEngine:{
    defaultLayout: false
  },
  viewPath: 'src/app/util'
}

transporter.use('compile', hbs(hbsOptions))