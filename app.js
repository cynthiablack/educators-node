


let receiver = document.querySelector('#fname').value + document.querySelector('#lname').value
let receiverEmail = document.querySelector('#email').value


let transporter = nodemailer.createTransport(
    
    transport.sendMail({
    from: "sender@email.com",
    to: receiverEmail,
    subject: "Thanks for Reaching Out!",
    text: 
}, defaults})
