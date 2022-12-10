const mostrarLosDivisoresComunes = document.getElementById("mostrarLosDivisoresComunes");
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function buscaLosDivisoresComunes() {
    const num1 = volverNumero(numero1.value);
    const num2 = volverNumero(numero2.value);
    let respuesta = ``;
    let cualEsElMenor = num1;
    let cualEsElMayor = num2;
    if(num2 < num1) {
        cualEsElMenor = num2;
        cualEsElMayor = num1;
    }

    for(let indice = 1; indice <= (cualEsElMenor / 2); indice++){
        if(num1 % indice == 0 && num2 % indice == 0){
            respuesta += `${indice}<br>`; 
        }
    }
    if(cualEsElMayor % cualEsElMenor == 0){
        respuesta += `${cualEsElMenor}<br>`; 
    }
    mostrarLosDivisoresComunes.innerHTML = `Los divisores comunes del número <strong>${num1}</strong> y del <strong>${num2}</strong> son:<br>${respuesta}`;
}