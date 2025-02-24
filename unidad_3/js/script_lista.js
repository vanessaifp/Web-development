// Función para validar la selección en el select
function validacion() {
    indice = document.getElementById("opciones").selectedIndex;
    if (indice == null || indice == 0) {
        texto.innerHTML = "Selecciona una valor valido";
        return false;
    }
}



