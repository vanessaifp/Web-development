
function cambiaOrden() {
    var texto = "";
    var textoAlReves = "";
    var longitud = 0;
    texto = document.getElementById("textoInput").value;  // Obtener el valor del input
    longitud = texto.length;
    for (var i = longitud - 1; i >= 0; i--) {
        textoAlReves = textoAlReves + texto.charAt(i);
    }
    document.getElementById("texto").innerHTML = textoAlReves;
}
