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

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const divTextoSuma = document.getElementById('resultadoSuma');

function resolverSuma(){
    const sumando1 = volverNumero(numero1.value);
    const sumando2 = volverNumero(numero2.value);
    const sumaTotal = sumando1 + sumando2;
    const textoResultado = `La suma de ${sumando1} con ${sumando2} es ${sumaTotal}`;
    divTextoSuma.innerHTML = textoResultado;
}