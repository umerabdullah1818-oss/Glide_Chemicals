const nodemailer = require('nodemailer');
require('dotenv').config();

console.log("Testing SMTP connection to: ", process.env.SMTP_HOST);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.error("Connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
