
window.onload = function () {
    document.onkeyup = muestraInformacion;
    document.onkeypress = muestraInformacion;
    document.onkeydown = muestraInformacion;
}
function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;
    var mensaje = "Tipo de evento " + evento.type + "//" +
    "propiedad keycode: " + evento.keyCode + "//" +
    "propiedad charcode: " + evento.charCode + "//" +
    "Caracter pulsado: " + String.fromCharCode(evento.charCode)
    info.innerHTML += "<br>-----------------<br>" + mensaje;
}






