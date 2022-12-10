/*

* Ejercicio 4
* Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
*
* * Conectamos este fichero de javaScript con index.html
* * Creamos en index.html el espacio donde insertaremos el texto solicitado
* * Asignaremos un identificador a dicho espacio para poder llamarlo desde javaScript
* * Creamos en index.html un formulario para recoger los datos solicitados
* * Recogemos los datos suministrados por el usuario
* * Pasamos los datos por una función que los transforma al tipo número
* * Rwlizamos la operación matemática solicitada
* * Crearemos el mensaje
* * Llamaremos al espacio reservado e nsertaremos el texto deseado en dicho espacio

*/

const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const numeroMayor = document.getElementById('numeroMayor');

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function cualMayor(numero1, numero2){
    if(numero1 > numero2){
        return `El ${numero1} es el mayor`;
    }

    if(numero2 > numero1){
        return `El ${numero2} es el mayor`;
    }

    return `Los dos números son iguales`;}

function mostrarCualEsMayor(){
    const numero1 = volverNumero(num1.value);
    const numero2 = volverNumero(num2.value);
    const textoCualEsMayor = cualMayor(numero1, numero2);
    numeroMayor.innerHTML = textoCualEsMayor;
}