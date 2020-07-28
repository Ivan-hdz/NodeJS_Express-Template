

const emailTemplates = require('./templates');
const transporterFactory = require('./config');


const sender = {};

sender.enviarCorreoCuentaNueva = async function (correo, nombre, subject) {
    const mailOptions = {
        from: 'noreply@host.com',
        to: correo,
        subject: subject,
        html: emailTemplates.cuentaCreada(nombre)
    };
    return new Promise((resolve, reject) => {
        //some code
        const transporter = transporterFactory.crearTransporter();
        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                console.error(err.toString()) ;
                return resolve(false)
            } else {
                console.log('Correo enviado a',correo);
                return resolve(true);
            }
        });
    });
};


module.exports = sender;
