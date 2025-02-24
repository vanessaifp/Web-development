
function clonaNodo() {
var div2 = document.getElementById("nodo").cloneNode(true);
document.getElementById("nodo").appendChild(div2);
}
function borraNodo() {
var nodo = document.getElementById("nodo");
nodo.removeChild(document.getElementById("lista")
)}



