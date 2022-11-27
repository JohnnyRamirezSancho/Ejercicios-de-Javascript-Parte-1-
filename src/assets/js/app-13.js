const susDivisores = document.getElementById("mostrarDivisores_13");

function divisores_13() {
    const numero_13 = document.getElementById("numero_13");
    const esteNumero_13 = volverNumero(numero_13.value);
    let respuesta = ``;
    for(let indice = 1; indice <= esteNumero_13 / 2; indice++){
        if(esteNumero_13 % indice == 0){
            respuesta += `${indice}<br>`; 
        }
    }
    susDivisores.innerHTML = `Los divisores del número ${esteNumero_13} son:<br>${respuesta}`;
}

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}