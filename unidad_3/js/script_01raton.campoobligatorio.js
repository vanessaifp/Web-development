// Función que se ejecuta al pulsar el botón
function validacion() {
    valor = document.getElementById("campo").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        // El código dentro de este bloque se ejecuta 
        // si alguna de las siguientes condiciones es verdadera:
        // 1. El valor es nulo
        // 2. La longitud del valor es 0 (cadena vacía)
        // 3. El valor está compuesto solo por caracteres de espacio en blanco
        texto.innerHTML = "ERROR!! Introduce un valor";
        return false;
    }
}




