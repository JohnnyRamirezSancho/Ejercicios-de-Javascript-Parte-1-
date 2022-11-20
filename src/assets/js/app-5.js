function cualMayor(numero1, numero2){
    if(numero1 > numero2){
        return `El ${numero1} es el mayor`;
    }

    if(numero2 > numero1){
        return `El ${numero2} es el mayor`;
    }

    return `El ${numero1} y el ${numero2} son iguales`;
}

function mostrarNumeroMayor(){
    const num1 = document.getElementById('numero1');
    const numero1 = volverNumero(num1.value);
    const num2 = document.getElementById('numero2');
    const numero2 = volverNumero(num2.value);
    const textoMayor = cualMayor(numero1, numero2);
    const divTextoSuma = document.getElementById('numeroMayor');
    divTextoSuma.innerHTML = textoMayor;
}