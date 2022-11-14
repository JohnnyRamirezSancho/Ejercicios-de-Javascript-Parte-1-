/*

* Ejercicio 1
* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
*
* Conectamos este fichero de javaScript con index.html
* Creamos en index.html el espacio donde insertaremos el texto solicitado
* Asignaremos un identificador a dicho espacio para poder llamarlo desde javaScript
* Crearemos el texto a insertar
* Crearemos los valores suministrados
* Calcularemos el resultado de la suma
* Llamaremos al espacio reservado
* Insertaremos el texto deseado en dicho espacio, junto al resultado
* Lo imprimiremos en pantalla

*/

const textoSolicitado = 'La suma de 3 + 5 es ';
let sumando1 = 3;
let sumando2 = 5;
let resultado = sumando1 + sumando2; 

function insertarSuma(){
    let divTextoSuma = document.getElementById('resultadoSuma');
    divTextoSuma.innerHTML = textoSolicitado + resultado;
} 

insertarSuma();