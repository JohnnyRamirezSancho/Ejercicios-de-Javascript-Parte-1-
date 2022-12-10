const mostrarSiEsPrimo = document.getElementById("mostrarSiEsPrimo");
const numero = document.getElementById("numero");

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function buscaSiEsPrimo() {
    const num = volverNumero(numero.value);
    let contador = 0;
    for(let indice = 1; indice <= (num / 2); indice++){
        if(num % indice == 0) {
            contador++;
        }
    }
    console.log(contador);
    if(contador == 1) {
        mostrarSiEsPrimo.innerHTML = `El número <strong>${num}</strong> es primo.`;
        return
    }
    mostrarSiEsPrimo.innerHTML = `El número <strong>${num}</strong> no es primo.`;
}