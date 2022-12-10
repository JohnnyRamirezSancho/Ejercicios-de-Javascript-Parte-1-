const dos = 2;
const tres = 3;
const cinco = 5;
const siete = 7;
const esDivisible = document.getElementById('esDivisible');

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function esDivisiblePor(){
    const num = document.getElementById('numero');
    const numero = volverNumero(num.value);
    if(numero % dos == 0){
        mostrarEsDivisible.innerHTML = `El número ${numero} es divisible por ${dos}.`;
        return;
    }
    if(numero % tres == 0){
        mostrarEsDivisible.innerHTML = `El número ${numero} es divisible por ${tres}.`;
        return;
    }
    if(numero % cinco == 0){
        mostrarEsDivisible.innerHTML = `El número ${numero} es divisible por ${cinco}.`;
        return;
    }
    if(numero % siete == 0){
        mostrarEsDivisible.innerHTML = `El número ${numero} es divisible por ${siete}.`;
        return;
    }

    mostrarEsDivisible.innerHTML = `El número ${numero} no es divisible ni por ${dos} ni por ${tres} ni por ${cinco} ni por ${siete}.`;
}

