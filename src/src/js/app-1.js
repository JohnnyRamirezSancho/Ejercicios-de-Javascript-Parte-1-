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

const tituloH1 = '<h1>Hello Javascript</h1>';

function insertarH1(){
    let divTitulo = document.getElementById('titulo');
    divTitulo.innerHTML = tituloH1;
} 

insertarH1();
