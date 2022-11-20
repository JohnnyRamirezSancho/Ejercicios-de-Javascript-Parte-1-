function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function mostrarSuma2(){
    const sumando1 = document.getElementById('sumando1');
    const numero1 = volverNumero(sumando1.value);
    const sumando2 = document.getElementById('sumando2');
    const numero2 = volverNumero(sumando2.value);
    const sumaTotal = numero1 + numero2;
    const divTextoSuma = document.getElementById('resultadoSuma2');
    divTextoSuma.innerHTML = `La suma de ${numero1} con ${numero2} es ${sumaTotal}`;
}