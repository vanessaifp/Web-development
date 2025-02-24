// Función que resalta el texto al pasar el ratón por encima, sacar el resalte al salir el ratón y darle un color de borde personalizado al hacer doble click.

function resalta(elEvento) {
    var evento = elEvento || window.event;
    switch (evento.type) {
        case "mouseover": this.style.borderColor = "red";
            break;
        case "mouseout": this.style.borderColor = "black"
            break;
        case "click": this.style.borderColor = "purple"
            break;
        case "dblclick": this.style.borderColor = "gray"
            break;
    }
}
window.onload = function () {
    document.getElementById("texto").onmouseover = resalta;
    document.getElementById("texto").onmouseout = resalta;
    document.getElementById("texto").onclick = resalta;
    document.getElementById("texto").ondblclick = resalta;
}



