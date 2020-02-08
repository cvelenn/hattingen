var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "cvelenn@gmail.com",
    pass: "130486gmail22"
  }
});
//https://myaccount.google.com/lesssecureapps set this on "on"
var mailOptions = {
    from: "no-reply@gmail.com",
    to: "cvelenn@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy! " + new Date()
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
