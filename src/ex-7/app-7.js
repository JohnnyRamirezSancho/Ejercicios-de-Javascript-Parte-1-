const letraQueBuscar = "a";
const laFrase = document.getElementById('fraseDondeBuscar');
const muestraCuantesVecesApareceLaLetraA = document.getElementById("cuantesVecesApareceLaLetraA");

function cuentaLetra(frase) {
    let cantidadDeVecesQueApareceLaA = 0;
    for (let indice = 0; indice < frase.length; indice++) {
        if(frase.toLowerCase().charAt(indice)==letraQueBuscar) {
            cantidadDeVecesQueApareceLaA++;
        }
   }
    return cantidadDeVecesQueApareceLaA
}

function cuantesVecesApareceLaLetraA(){
    const textoDondeBuscar = laFrase.value;
    const cuantasVecesApareceLaLetraA = cuentaLetra(textoDondeBuscar);
    muestraCuantesVecesApareceLaLetraA.innerHTML = `La letra <strong>${letraQueBuscar}</strong> aparece <strong>${cuantasVecesApareceLaLetraA} veces</strong> en la frase "${textoDondeBuscar}" (incluyendo mayúsculas y minúsculas)"`;
}