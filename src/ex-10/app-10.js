const dondeBuscar = document.getElementById('fraseParaContarTotalPorVocal');
const mostrarTotalPorVocalEnFrase = document.getElementById("mostrarTotalPorVocalEnFrase");

function queVocalesAparecen(frase) {
    let cantidadA = 0;
    let cantidadE = 0;
    let cantidadI = 0;
    let cantidadO = 0;
    let cantidadU = 0;

    for (let indice = 0; indice < frase.length; indice++) {
        if (frase.charAt(indice) == "a") {
            cantidadA++;
        }
        if (frase.charAt(indice) == "e") {
            cantidadE++;
        }
        if (frase.charAt(indice) == "i") {
            cantidadI++;
        }
        if (frase.charAt(indice) == "o") {
            cantidadO++;
        }
        if (frase.charAt(indice) == "u") {
            cantidadU++;
        }
    }

    const respuesta = [
        {letra: "a", cantidad: cantidadA},
        {letra: "e", cantidad: cantidadE},
        {letra: "i", cantidad: cantidadI},
        {letra: "o", cantidad: cantidadO},
        {letra: "u", cantidad: cantidadU}        
    ]

    return respuesta;
}

function cuantasVocalesDeCada() {
    mostrarTotalPorVocalEnFrase.innerHTML = "";
    const fraseParaContarTotalPorVocal = dondeBuscar.value;
    const cuantasVocalesAparecen = queVocalesAparecen(fraseParaContarTotalPorVocal);
    let vocalesQueAparecen = 0;
    let cuantasVocalesDiferentesAparecen = 0;
    
    cuantasVocalesAparecen.forEach(vocal => {
        vocalesQueAparecen += vocal.cantidad;
        if(vocal.cantidad > 0) {
            cuantasVocalesDiferentesAparecen++
        }
    });

    if (vocalesQueAparecen == 0) {
        respuesta = `En el texto <strong>${fraseParaContarTotalPorVocal}</strong> no aparece ninguna vocal.`;
        mostrarTotalPorVocalEnFrase.innerHTML = respuesta;
        return false;
    }

    respuesta = `En el texto <strong>${fraseParaContarTotalPorVocal}</strong> tenemos:<br> `;
   
    cuantasVocalesAparecen.forEach(vocal => {
        if(vocal.cantidad != 0 ) {
            respuesta += `la ${vocal.letra}: `
            if(vocal.cantidad == 1) {
                respuesta += `${vocal.cantidad} vez<br>`
            } else {
                respuesta += `${vocal.cantidad} veces<br>`
            }
        }
    })
    
    mostrarTotalPorVocalEnFrase.innerHTML = respuesta;
}