
function comprobarNota() {
    // Obtener la nota ingresada por el usuario
    var Nota = document.getElementById("notaInput").value;

    // Comprobar si la nota está en el rango correcto (0-10)
    if (Nota >= 0 && Nota <= 10) {
        document.getElementById("resultado").innerHTML = "La nota introducida " + Nota + " es correcta.";
    } else {
        document.getElementById("resultado").innerHTML = "Nota errónea. Debe estar entre 0 y 10.";
    }
}
