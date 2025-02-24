
function nuevaVentana() {
    window.open()
} 
function indicaLocation() {
    document.getElementById("texto").innerHTML = window.location + 
    "<br>" + window.host +
    "<br>" + window.hostlocation
}
function altoAncho () {
    document.getElementById("texto").innerHTML = window.innerWidth + " x " + window.innerHeight + "<br>" + screen.availWidth + " x " + screen.availHeight
}
function documento () {
    document.getElementById("texto").innerHTML = window.navigator.appName + "//<br>" +
    window.navigator.appVersion + "//<br>" + window.navigator.userAgent
} 
function cierraVentana () {
    window.close()
} 
function imprimir () {
    window.print()
}


