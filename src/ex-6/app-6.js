const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const num3 = document.getElementById('numero3');
const divTextoMayorDelosTres = document.getElementById('numeroMayorDeTres');

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function cualEsMayorDeLosTres(numero1, numero2, numero3){
    if((numero1 > numero2) && (numero1 > numero3)){
        return `El mayor es el número ${numero1}.`;
    }
    
    if((numero2 > numero1) && (numero2 > numero3)){
        return `El mayor es el número ${numero2}.`;
    }

    if((numero3 > numero1) && (numero3 > numero2)){
        return `El mayor es el número ${numero3}.`;
    }
    
    return `No puedo determinar cual es el mayor.`;
}

function mostrarNumeroMayorDeLosTres(){
    const numero1 = volverNumero(num1.value);
    const numero2 = volverNumero(num2.value);
    const numero3 = volverNumero(num3.value);
    const textoMayorDeLosTres = cualEsMayorDeLosTres(numero1, numero2, numero3);
    divTextoMayorDelosTres.innerHTML = textoMayorDeLosTres;
}