
function comprobarNota() {
    var Nota;
    var inputNota = document.getElementById("notaInput");

    do {
        Nota = Number(inputNota.value); // Obtener y convertir la nota

        if (isNaN(Nota) || Nota < 0 || Nota > 10) {
            document.getElementById("resultado").innerHTML = "Nota errónea. Debe estar entre 0 y 10.";
            return false; // Evita que el formulario se envíe
        }

    } while (isNaN(Nota) || Nota < 0 || Nota > 10);

    // Si la nota es válida, muestra el resultado
    document.getElementById("resultado").innerHTML = "La nota introducida " + Nota + " es correcta.";
    return false; // Evita que el formulario recargue la página
}
