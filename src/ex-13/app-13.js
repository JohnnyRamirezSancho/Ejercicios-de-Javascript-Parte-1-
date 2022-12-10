const mostrarLosDivisores = document.getElementById("mostrarLosDivisores");
const numero = document.getElementById("numero");

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function buscaLosDivisores() {
    const num = volverNumero(numero.value);
    let respuesta = ``;
    for(let indice = 1; indice <= (num / 2); indice++){
        if(num % indice == 0){
            respuesta += `${indice}<br>`; 
        }
    }
    respuesta += `${num}`;
    mostrarLosDivisores.innerHTML = `Los divisores del número <strong>${num}</strong> son:<br>${respuesta}`;
}