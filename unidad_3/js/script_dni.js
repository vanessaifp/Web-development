
function validacion() {
  var valor = document.getElementById("campo").value.toUpperCase();
  var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

  // Verificar formato correcto
  if (!/^[XYZ0-9][0-9]{7}[A-Z]$/.test(valor)) {
    alert("DNI incorrecto");
    return false;
  }

  // Sustituir letras iniciales por números equivalentes
  var numeroDNI = valor.substring(0, 8).replace("X", "0").replace("Y", "1").replace("Z", "2");

  // Obtener la letra correcta según el módulo 23
  var letraCorrecta = letrasDNI[numeroDNI % 23];

  // Comparar con la letra ingresada
  if (valor.charAt(8) !== letraCorrecta) {
    alert("DNI incorrecto");
    document.getElementById("texto").innerHTML = "DNI incorrecto";
    return false;
  }

  alert("DNI correcto");
  document.getElementById("texto").innerHTML = "DNI correcto";
  return true;
}



