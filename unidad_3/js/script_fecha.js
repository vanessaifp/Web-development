

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario si hay error
    var dia = parseInt(document.getElementById("dia").value, 10);
    var mes = parseInt(document.getElementById("mes").value, 10);
    var anyo = parseInt(document.getElementById("anyo").value, 10);
    var mensaje = document.getElementById("mensaje");

    // Verificación básica de números
    if (isNaN(dia) || isNaN(mes) || isNaN(anyo)) {
        mensaje.innerHTML = '<span style="color:red;">Por favor, ingresa valores numéricos.</span>';
        return;
    }

    // Validación de año (debe ser de 4 dígitos)
    if (anyo < 1900 || anyo > 2100) {
        mensaje.innerHTML = '<span style="color:red;">Año incorrecto (Debe estar entre 1900 y 2100).</span>';
        return;
    }

    // Comprobación de año bisiesto
    var esBisiesto = (anyo % 4 === 0 && anyo % 100 !== 0) || (anyo % 400 === 0);

    // Días máximos según el mes
    var diasMaximos = [31, esBisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Validación del mes
    if (mes < 1 || mes > 12) {
        mensaje.innerHTML = '<span style="color:red;">Mes incorrecto (Debe estar entre 1 y 12).</span>';
        return;
    }

    // Validación del día
    if (dia < 1 || dia > diasMaximos[mes - 1]) {
        mensaje.innerHTML = `<span style="color:red;">Día incorrecto (El mes ${mes} tiene ${diasMaximos[mes - 1]} días).</span>`;
        return;
    }

    // Si todo es correcto, mostrar mensaje en verde
    mensaje.innerHTML = '<span style="color:green;">Fecha válida.</span>';
});
