function cuentaTodasVocales(frase) {
    let totalVocales = 0;
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

    totalVocales = cantidadA + cantidadE + cantidadI + cantidadO + cantidadU;

    return totalVocales;
}

function queFrase_9() {
    let respuesta = "";
    const frase_9 = document.getElementById('frase_9');
    const texto_9 = frase_9.value;
    const cantidadVocales = cuentaTodasVocales(texto_9);
    const queFrase_9 = document.getElementById("queFrase_9");
    if (cantidadVocales == 0) {
        respuesta = `En la frase ${texto_9} no aparece ninguna vocal.`;
        queFrase_9.innerHTML = respuesta;
        return false;
    }

    let textVocal = "vocal";
    if(cantidadVocales > 1) {
        textVocal = "vocales";
    }
    respuesta = `En la frase ${texto_9} tenemos ${cantidadVocales} ${textVocal}.`;
    queFrase_9.innerHTML = respuesta;
}