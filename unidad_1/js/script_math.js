 // Crear un objeto Math con funciones matemáticas para mostrarlos en una página HTML.
        
function objetoMath () {
    document.getElementById("texto").innerHTML = "";
    mostrarMath("El número 'e' es: " + Math.E)
    mostrarMath("El número 'pi' es: " + Math.PI)
    mostrarMath("La raiz cuadrada de 25 es: " + Math.sqrt(25))
    mostrarMath("El método ceil para 13,74 es: " + Math.ceil(13.74))
    mostrarMath("El método floor para 13,74 es: " + Math.floor(13.74))
    mostrarMath("El round para 13,74 es: " + Math.round(13.74))
    mostrarMath("9 elevado al cubo es: " + Math.pow(9,3))
    mostrarMath("Doy un numero al azar: " + Math.round(Math.random()*100))
 }
function mostrarMath(e) {
    document.getElementById("texto").innerHTML += e + "<br>";
} 

