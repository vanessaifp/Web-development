function responde() {
    // Obtener los nombres ingresados
    var nombres = [
        document.getElementById("nombre1").value,
        document.getElementById("nombre2").value,
        document.getElementById("nombre3").value
    ];

    // Verificar que los nombres no estén vacíos
    if (nombres.some(nombre => nombre.trim() === "")) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    
    document.getElementById("texto").innerHTML = "";

  
    var resultado = "";

    
    if (document.getElementById("alfabetico").checked) {
        nombres.sort();
        resultado = nombres.join(", ");
    } else if (document.getElementById("reves").checked) {
        nombres.reverse();
        resultado = nombres.join(", ");
    } else if (document.getElementById("separado1").checked) {
        resultado = nombres.join("-");
    } else if (document.getElementById("separado2").checked) {
        resultado = nombres.join("/");
    }

   
    document.getElementById("texto").innerHTML = resultado;
}
