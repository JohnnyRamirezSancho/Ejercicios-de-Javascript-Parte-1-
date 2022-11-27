function cuentaVocales(frase) {
    let cantidadA = 0;
    let cantidadE = 0;
    let cantidadI = 0;
    let cantidadO = 0;
    let cantidadU = 0;
    for (let indice = 0; indice < frase.length; indice++) {
        if (frase.charAt(indice) == "a") {
            cantidadA++;
        }
        console.log(cantidadA);
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

    return [
        cantidadA,
        cantidadE,
        cantidadI,
        cantidadO,
        cantidadU
    ]
}

function queFrase_8() {
    let respuesta = "";
    const frase_8 = document.getElementById('frase_8');
    const texto_8 = frase_8.value;
    const cantidadVocales = cuentaVocales(texto_8);
    const queFrase_8 = document.getElementById("queFrase_8");
    const totalVocales = cantidadVocales[0] + cantidadVocales[1] + cantidadVocales[2] + cantidadVocales[3] + cantidadVocales[4];
    if (totalVocales == 0) {
        respuesta = `En la frase ${texto_8} no aparece ninguna vocal.`;
        queFrase_8.innerHTML = respuesta;
        return false;
    }

    respuesta = `En la frase ${texto_8} tenemos `;
   
    let textVocal = "las vocales: <br>";
    if (totalVocales == 1) {
        textVocal = "la vocal: <br> ";
    }
    respuesta += textVocal;

    if (cantidadVocales[0] != 0) {
        respuesta += "a<br>";
    }
    if (cantidadVocales[1] != 0) {
        respuesta += "e<br>";
    }
    if (cantidadVocales[2] != 0) {
        respuesta += "i<br>";
    }
    if (cantidadVocales[3] != 0) {
        respuesta += "o<br>";
    }
    if (cantidadVocales[4] != 0) {
        respuesta += "u<br>";
    }
    
    queFrase_8.innerHTML = respuesta;
}