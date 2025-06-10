const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
  const { to, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject: "Generated from UI",
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    context.res = { status: 200, body: "Email sent successfully!" };
  } catch (err) {
    context.res = { status: 500, body: "Failed to send email: " + err.message };
  }
};
