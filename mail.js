var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "cvelenn@yahoo.com",
    pass: "130486yahoo"
  }
});

var mailOptions = {
    from: "youremail@gmail.com",
    to: "cvelenn@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
