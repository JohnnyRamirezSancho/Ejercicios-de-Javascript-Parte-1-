const dos = 2;
const tres = 3;
const cinco = 5;
const siete = 7;
const escribeDivisible = document.getElementById('esDivisible');

function esDivisiblePor_11(){
    const numero = document.getElementById('numero');
    const numero1 = volverNumero(numero.value);
    if(numero1 % dos == 0){
        escribeDivisible.innerHTML = `El número ${numero1} es divisible por ${dos}.`;
        return;
    }
    if(numero1 % tres == 0){
        escribeDivisible.innerHTML = `El número ${numero1} es divisible por ${tres}.`;
        return;
    }
    if(numero1 % cinco == 0){
        escribeDivisible.innerHTML = `El número ${numero1} es divisible por ${cinco}.`;
        return;
    }
    if(numero1 % siete == 0){
        escribeDivisible.innerHTML = `El número ${numero1} es divisible por ${siete}.`;
        return;
    }
    escribeDivisible.innerHTML = `El número ${numero1} no es divisible ni por ${dos} ni por ${tres} ni por ${cinco} ni por ${siete}.`;

}

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}
