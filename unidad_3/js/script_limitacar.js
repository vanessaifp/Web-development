
function limita(maximoCaracteres) {
    var elemento = document.getElementById("text");
    if (elemento.value.length > maximoCaracteres) {
        elemento.value = elemento.value.substring(0, maximoCaracteres);
    }
}

