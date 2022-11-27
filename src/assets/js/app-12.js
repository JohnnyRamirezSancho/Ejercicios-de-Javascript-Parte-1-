const numDos = 2;
const numTres = 3;
const numCinco = 5;
const numSiete = 7;
const escribeTodosDivisible = document.getElementById('esDivisibleTodos');

function esDivisiblePor_12(){
    const numero = document.getElementById('numero_12');
    const numero1 = volverNumero(numero.value);
    let porDos = false;
    let porTres = false;
    let porCinco = false;
    let porSiete = false;
    if(numero1 % numDos == 0){
        porDos = true;
    }
    if(numero1 % numTres == 0){
        porTres = true;
    }
    if(numero1 % numCinco == 0){
        porCinco = true;
    }
    if(numero1 % numSiete == 0){
        porSiete = true;
    }

    let respuesta = ``;
    if(porDos || porTres || porCinco || porSiete) {
        respuesta = `El número ${numero1} es divisible por:<br>`;
        if(porDos) {
            respuesta += `${numDos}<br>`;
        }
        if(porTres) {
            respuesta += `${numTres}<br>`;
        }
        if(porCinco) {
            respuesta += `${numCinco}<br>`;
        }
        if(porSiete) {
            respuesta += `${numSiete}<br>`;
        }
        escribeTodosDivisible.innerHTML = respuesta;

        return;
    }

    respuesta = `El número ${numero1} no es divisible ni por ${numDos} ni por ${numTres} ni por ${numCinco} ni por ${numSiete}.`;

    escribeTodosDivisible.innerHTML = `El número ${numero1} no es divisible ni por ${dos} ni por ${tres} ni por ${cinco} ni por ${siete}.`;
}

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}