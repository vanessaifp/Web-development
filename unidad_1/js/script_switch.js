    function horario(event) {
        event.preventDefault();
        var dia_semana = document.getElementById("diaSemana").value;
        var mensaje = "";
        switch (dia_semana) {
            case "lu": mensaje = "El horario es de 17 a 21h"; break;
            case "ma": mensaje = "El horario es de 15 a 21h"; break;
            case "mi": mensaje = "El horario es de 12 a 18h"; break;
            case "ju": mensaje = "El horario es de 13 a 20h"; break;
            case "vi": mensaje = "El horario es de 10 a 16h"; break;
            case "sa": mensaje = "Hoy está cerrado"; break;
            case "do": mensaje = "Hoy está cerrado"; break;
            default: mensaje = "No entiendo el día que me dices"; break;
        }
        document.getElementById("resultado").innerHTML = mensaje;
    }
