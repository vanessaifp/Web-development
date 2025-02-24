function buscar() {
    var e = document.getElementById("buscar");
    var nombreSeleccionado = e.value;
    var Nombres = ["MARIA", "JUAN", "PEDRO", "ISABEL", "PEPE", "FERNANDO", "ROBERTO"];
    var contador;
    var encontrado = -1;
    for (contador = 0; contador < Nombres.length; contador++) {
        if (Nombres[contador] == nombreSeleccionado) {
            encontrado = contador + 1;
            break;
        }
    }
    if (encontrado == -1) {
        document.getElementById("texto").innerHTML = "Nombre no encontrado";
    } else {
        document.getElementById("texto").innerHTML = nombreSeleccionado + " está en la posición: " + (contador + 1);
    }
}
