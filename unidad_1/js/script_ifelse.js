
        function calculaLetra(event) {
            event.preventDefault();
            var letras = [
                "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S",
                "Q", "V", "H", "L", "C", "K", "E", "T"];
            
            var numero = document.getElementById("numeroDNI").value;
            var letra = document.getElementById("letraDNI").value.toUpperCase();
            
            if (numero < 0 || numero > 99999999) {
                document.getElementById("dni").innerHTML = "Introduce un número entre 0 y 99999999";
            } else {
                var letracalculada = letras[numero % 23];
                if (letracalculada != letra) {
                    document.getElementById("dni").innerHTML = numero + letra + " - La letra es NO correcta";
                } else {
                    document.getElementById("dni").innerHTML = numero + letra + " - La letra es correcta";
                }
            }
        }