// Función que muestra información sobre la posición actual del usuario
function indicaLocation() {
    document.getElementById("texto").innerHTML = 
    "Href: " + location.href + 
    "<br>Host: " + location.host +
    "<br>Hostname: " + location.hostname +
    "<br>Pathname: " + location.pathname +
    "<br>Port: " + location.port +
    "<br>Protocol: " + location.protocol 
}




