const posiblesDivisores = [
    {divisor: 2},
    {divisor: 3},
    {divisor: 5},
    {divisor: 7}
];
const numero = document.getElementById('numero');
const escribeTodosDivisible = document.getElementById('mostrarEsDivisible');

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function esDivisiblePor(){
    escribeTodosDivisible.innerHTML = "";
    const num = volverNumero(numero.value);
    let respuesta = ``;
    
    posiblesDivisores.forEach(candidato => {
        console.log(candidato.divisor);
        if(num % candidato.divisor == 0) {
            respuesta += `<strong>${candidato.divisor}</strong><br>`;
        }
    });

    if(respuesta!=``) {
        respuesta = `El número <strong>${num}</strong> es divisible por:<br>${respuesta}`;
        escribeTodosDivisible.innerHTML = respuesta;
        return
    }

    
    respuesta = `El número <strong>${num}</strong> no es divisible `;
    posiblesDivisores.forEach(candidato => {
        respuesta += `ni por ${candidato.divisor} `
        }
    )
    escribeTodosDivisible.innerHTML = respuesta;
};