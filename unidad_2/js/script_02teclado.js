
        window.onload = function () {
            document.onkeypress = manejador;
        }
        function manejador(elEvento) {
            var evento = elEvento || window.event;
            var caracter = evento.charCode || evento.keyCode;
            info.innerHTML += "Caracter pulsado: " + String.fromCharCode(caracter) + " ---- con codigo de teclado " + evento.charCode + "<br>"
        }
  

