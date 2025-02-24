// Función que calcula la longitud de una cadena
        
function introCadena () {
    e = prompt ("Introduce cadena de texto: ")
    longitud = e.length
    mostrarCadena ("Longitud = " + longitud)
    grande = e.big()
    mostrarCadena ("En grande = " + grande)
    pequeno = e.small()
    mostrarCadena ("En pequeño = " + pequeno)
    minis = e.toLowerCase()
    mostrarCadena ("Minísculas = " + minis)
    mayus = e.toUpperCase()
    mostrarCadena ("Mayúsculas = " + mayus)
    cursivas = e.italics()
    mostrarCadena ("Cursivas = " + cursivas)
    negrita = e.bold()
    mostrarCadena ("Negrita = " + negrita)
    tachado = e.strike()
    mostrarCadena ("Tachado = " + tachado)
    superi = e.sup()
    mostrarCadena ("Superindice = " + superi)
    subi = e.sub()
    mostrarCadena ("Subindice = " + subi)
}
function mostrarCadena(e) {
    document.getElementById("texto").innerHTML += e + "<br>";
} 


