//Función que se ejecuta al cargar la página
function respuesta() {  
    //Obtenemos la referencia a la lista
    var lista = document.getElementById("opciones");
    //Obtenemos el indice seleccionado
    var indiceSeleccionado = lista.selectedIndex;
    //Con este indice y el array "options" obtenemos la opcion selccionada
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    //Obtenemos el valor y el texto seleccionado.
    var textoSeleccionado = opcionSeleccionada.text;
    var valorSeleccionado = opcionSeleccionada.value;
    if (valorSeleccionado==0) {
    texto.innerHTML = "Debes seleccionar algún valor"
        } else {
    texto.innerHTML = "Opción Seleccionada: " + textoSeleccionado 
    + " - Valor de la opción: " + valorSeleccionado;
    }
}


