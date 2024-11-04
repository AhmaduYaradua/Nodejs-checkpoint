import nodemailer from "nodemailer";

// Sending email using nodemailer

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "***************@gmail.com",
    pass: "*************************",
  },
});

let mailOptions = {
  from: "*************@gmail.com",
  to: "***************@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent:" + info.response);
  }
});
