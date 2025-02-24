
function validacion() {
    valor = document.getElementById("campo").value;
    if (isNaN(valor)) {
        texto.innerHTML = "No es un numero válido";
        return false;
    }
}


