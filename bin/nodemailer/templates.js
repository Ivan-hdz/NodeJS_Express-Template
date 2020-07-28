
const templates = {};
templates.cuentaCreada = function (nombre) {
    return "<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        "<title>Registro exitoso</title>" +
        "<meta charset='utf-8'>" +
        "<meta name='viewport' content='width=device-width, initial-scale=1'>" +
        "</head>" +
        "<body>" +
        "<center>" +
        "<img src='https://isagenixeventos.com.mx/assets/home-img.png' style='max-width: 30%'>" +
        "<p><b>¡BIENVENIDO "+nombre+"!</b></p>" +
        "<br>" +
        "<p style='margin: 0 auto; width: 80%;'><b>AHORA PUEDES INGRESAR AL CONTENIDO DE LA APP DEL EVENTO CON TU CORREO REGISTRADO PREVIAMENTE.</b></p>" +
        "</center>" +
        "</body>" +
        "</html>"
};
module.exports = templates;
