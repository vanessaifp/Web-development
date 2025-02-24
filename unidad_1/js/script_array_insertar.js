var nombres = ["MARIA", "JUAN", "PEDRO", "ISABEL", "PEPE", "FERNANDO", "ROBERTO"];

function mostrar() {
    document.getElementById("texto").innerHTML = nombres;
}

function insertarI() {
    nuevoNombre = prompt("Indica el nuevo nombre a insertar");
    nombres.unshift(nuevoNombre);
    mostrar();
}

function insertarF() {
    nuevoNombre = prompt("Indica el nuevo nombre a insertar");
    nombres.push(nuevoNombre);
    mostrar();
}

function borrarI() {
    nombres.shift();
    mostrar();
}
function borrarF() {
    nombres.pop();
    mostrar();
}

function inserta2() {
    nuevoNombre = prompt("Indica el nuevo nombre a insertar en la posición 3");
    nombres.splice(2, 0, nuevoNombre);
    mostrar();
}

function inserta3() {
    nuevoNombre = prompt("Indica el nuevo nombre a insertar en la posición 3 y borra actual");
    nombres.splice(2, 1, nuevoNombre);
    mostrar();
}
