 var fecha;
        
function introFecha () {
    document.getElementById("texto").innerHTML = ""
    fecha = new Date()
    mostrarFecha(fecha)
    dia = fecha.getDate()
    mostrarFecha("El día es: " + dia)
    mes = fecha.getMonth()
    meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    mes = meses[mes]
    mostrarFecha("El mes es: " + mes)
    anyo = fecha.getFullYear()
    mostrarFecha("El año es: " + anyo)
    hora = fecha.getHours()
    mostrarFecha("La hora es: " + hora)
    minutos = fecha.getMinutes()
    mostrarFecha("Los minutos son: " + minutos)
    segundos = fecha.getSeconds()
    mostrarFecha("Los segundos son: " + segundos)
 }
function mostrarFecha(e) {
    document.getElementById("texto").innerHTML += e + "<br>";
} 

