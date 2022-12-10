/*

* Ejercicio 2
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

const divTextoSuma = document.getElementById('resultadoSuma');

function mostrarSuma(){
    const numero1 = 3;
    const numero2 = 5;
    const resultado = numero1 + numero2; 
    const textoRespuesta = 'La suma de 3 + 5 es ';
    divTextoSuma.innerHTML = textoRespuesta + resultado;
} 

mostrarSuma();