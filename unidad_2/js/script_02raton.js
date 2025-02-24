

window.onload = function () {
    document.onclick = muestraCoordenadas;
}
function muestraCoordenadas(elEvento) {
    var evento = elEvento || window.event;
    //Detectar si el navegador es Internet Explorer
    var ie = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    if (ie) {
        coorX = evento.clientX + document.body.scrollLeft;
        coorY = evento.clientY + document.body.scrollTop;
    }
    else {
    var coorX = evento.pageX;
    var coorY = evento.pageY;
    }
    document.getElementById("texto").innerHTML += "<br>Has pulsado el ratón en la coordenada " + coorX + " - " + coorY
}
