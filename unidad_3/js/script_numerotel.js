
function validacion() {
  var valor = document.getElementById("campo").value.trim();
  var mensaje = document.getElementById("texto");

  // Validar que el número tenga 9 dígitos y empiece por 6, 7, 8 o 9
  if (!/^[6789]\d{8}$/.test(valor)) {
    alert("Teléfono incorrecto");
    mensaje.innerHTML = "<span style='color: red;'>Teléfono incorrecto</span>";
    return false;
  }

  alert("Teléfono correcto");
  mensaje.innerHTML = "<span style='color: green;'>Teléfono correcto</span>";
  return true;
}
