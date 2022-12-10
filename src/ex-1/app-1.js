/*

* Ejercicio 1
* Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
*
* Conectamos este fichero de javaScript con index.html
* Creamos en index.html el espacio donde insertaremos el texto solicitado
* Asignaremos un identificador a dicho espacio para poder llamarlo desde javaScript
* Crearemos el texto a insertar 
* Llamaremos al espacio reservado
* Insertaremos el texto deseado en dicho espacio
* Lo imprimiremos en pantalla

*/

const divTitulo = document.getElementById('titulo');
const titulo = 'Hello, Javascript!';
const h1 = `<h1>${titulo}</h1>`;

function insertarH1(){
    divTitulo.innerHTML = h1;
} 

insertarH1();