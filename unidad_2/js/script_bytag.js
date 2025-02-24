
function muestraParrafos() {
    longitud = document.getElementsByTagName("p").length
    for (i = 0; i <= longitud; i++) {
        document.getElementById("texto").innerHTML += document.getElementsByTagName("p")[i].innerText + "<br>";
    }
}




