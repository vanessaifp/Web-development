
function validacion() {
  if (!condiciones.checked) {
    alert("Debe aceptar las condiciones")
    return false;
  }
  if (!privacidad.checked) {
    alert("Debe aceptar las privacidad")
    return false;
  }
  if (condiciones.checked && privacidad.checked) {
    alert ("Gracias por aceptar las condiciones y la privacidad")
  }
}



