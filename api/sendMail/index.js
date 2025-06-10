const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
  const { to, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "testing.jad.123@gmail.com",
      pass: "diug arnq lift ogkk"
    }
  });

  const mailOptions = {
    from: "testing.jad.123@gmail.com",
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
