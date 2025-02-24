//Función que se ejecuta al hacer clic en el botón
function respuesta() {
    document.getElementById("texto").innerHTML = "";
    //obtengo todos los elementos con nombre pregunta, creo un array llamado elementos
    var elementos = document.getElementsByName("pregunta");
    //mediante un for, recorro dicho array y muestro por pantalla su valor y si está o no chequeado.
    for (var i = 0; i < elementos.length; i++)
        document.getElementById("texto").innerHTML += "Elemento: " + elementos[i].value + " - Seleccionado: " + elementos[i].checked + "<br>"
}


