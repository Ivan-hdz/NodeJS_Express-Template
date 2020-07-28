
const nodemailer = require('nodemailer');
const transporter = {};
transporter.crearTransporter = () => {
    return nodemailer.createTransport({
        // service: 'gmail',
        host: 'mail.host.com',
        port: 465,
        secure: true,
        auth: {
            user: 'noreply@host.com', // generated ethereal user
            pass: 'pwd' // generated ethereal password
        }
    });
}
transporter.crearTransporterPool = () => {
    return nodemailer.createTransport({
        // service: 'gmail',
        host: 'mail.host.com',
        port: 465,
        secure: true,
        pool: true,
        auth: {
            user: 'noreply@host.com', // generated ethereal user
            pass: 'pwd' // generated ethereal password
        }
    });
}


module.exports = transporter;
