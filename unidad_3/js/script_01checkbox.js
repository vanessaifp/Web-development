
function respuesta() {  
    texto.innerHTML = ""
    var lee_condiciones = document.getElementById("condiciones")
    texto.innerHTML = "Elemento: " + lee_condiciones.value + " - Seleccionado: " + lee_condiciones.checked + "<br>"
    var lee_privacidad = document.getElementById("privacidad")
    texto.innerHTML += "Elemento: " + lee_privacidad.value + " - Seleccionado: " + lee_privacidad.checked
    if (lee_privacidad.checked && lee_condiciones.checked) {
        texto.innerHTML += "<br>Has leído y aceptado las condiciones"
    } else {
        texto.innerHTML += "<br>Debes leer y aceptar las condiciones"
    }
}




