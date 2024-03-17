const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kainatrobi01@gmail.com",
      pass: "xjdp0754 sw357go658 plug xpeg",
    },
  });

  const mailOptions = {
    from: "abc@gmail.com",
    to: "xyz@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email from kainatrobi.",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });