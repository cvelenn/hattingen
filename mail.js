var nodemailer = require("nodemailer");

async function main() {

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
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

}

main().catch(console.error);