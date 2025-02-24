
function valores() {
       var valorTexto = document.getElementById("textoo").value;
       document.getElementById("texto").innerHTML = "En el input: " + 
       valorTexto + "<br>";
       var valorParrafo = document.getElementById("parrafo").value;
       document.getElementById("texto").innerHTML += "En el textarea: " + 
       valorParrafo + "<br>";              
   }
