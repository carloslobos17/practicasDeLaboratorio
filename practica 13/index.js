const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "resend",
    pass: "re_hqWGTtuG_458ewKgPSWWK8W6CN5CuT6eB",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison" <onboarding@resend.dev>', // sender address
    to: "loboscarlos1704@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

function enviar() {

    let asunto = document.getElementById("asunto").value 
    let dest = document.getElementById("para").value 
    let cuerpo = document.getElementById("para").value 
   
    return console.log(asunto + "para:" + dest + cuerpo)
}


main().catch(console.error);
