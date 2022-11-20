function cualMayorDeTres(num1, num2, num3){
    if((num1 > num2) && (num1 > num3)){
        return `El mayor es el número ${num1}.`;
    }

    if((num2 > num1) && (num2 > num3)){
        return `El mayor es el número ${num2}.`;
    }

    if((num3 > num1) && (num3 > num2)){
        return `El mayor es el número ${num3}.`;
    }

    return `No puedo determinar cual es el mayor.`;
}

function mostrarNumeroMayorDeTres(){
    const num1_6 = document.getElementById('numero1-6');
    const numero1_6 = volverNumero(num1_6.value);
    const num2_6 = document.getElementById('numero2-6');
    const numero2_6 = volverNumero(num2_6.value);
    const num3_6 = document.getElementById('numero3-6');
    const numero3_6 = volverNumero(num3_6.value);
    const textoMayorDeTres = cualMayorDeTres(numero1_6, numero2_6, numero3_6);
    const divTextoSuma = document.getElementById('numeroMayorDeTres');
    divTextoSuma.innerHTML = textoMayorDeTres;
}