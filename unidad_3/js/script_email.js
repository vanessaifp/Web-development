
document.getElementById("formulario").addEventListener("submit", function(event) {
    var emailField = document.getElementById("user-email");
    var texto = document.getElementById("texto");
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validEmail.test(emailField.value)) {
        texto.innerHTML = '<span style="color:green;">Email es correcto</span>';
    } else {
        texto.innerHTML = '<span style="color:red;">Email es incorrecto</span>';
        event.preventDefault(); // Evita que el formulario se envíe si el email es incorrecto
    }
});
