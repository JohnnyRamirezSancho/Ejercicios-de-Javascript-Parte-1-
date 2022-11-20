/*

* Ejercicio 1
* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
*
* * Conectamos este fichero de javaScript con index.html
* * Creamos en index.html el espacio donde insertaremos el texto solicitado
* * Asignaremos un identificador a dicho espacio para poder llamarlo desde javaScript
* * Creamos en index.html unformulario para recoger el dato solicitado
* * Recogemos el dato suministrados por el usuario
* * Crearemos el mensaje
* * Llamaremos al espacio reservado
* * Insertaremos el texto deseado en dicho espacio
* * Lo imprimiremos en pantalla

*/

function mostrarSaludo() {
    const nombre = document.getElementById('nombreUsuario');
    nombreUsuario = nombre.value;
    const mensajeTxt = document.getElementById("saludo");
    mensajeTxt.innerHTML = `Hola, ${nombreUsuario}.`;
}