
// Función para mostrar los párrafos de la canción
function muestraParrafos() {
    let parrafos = document.getElementsByName("cancion"); // Obtiene los elementos por name
    let contenido = ""; // Variable para almacenar el contenido
    
    for (let i = 0; i < parrafos.length; i++) { // Recorre los elementos correctamente
        contenido += parrafos[i].innerText + "<br>"; // Agrega el texto de cada párrafo
    }
    
    document.getElementById("texto").innerHTML = contenido; // Muestra los párrafos en el div
}
