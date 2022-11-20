function cuentaVocales(frase) {
    console.log(frase);
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
    if (cantidadVocales[0] == 0 && cantidadVocales[1] == 0 && cantidadVocales[2] == 0 && cantidadVocales[3] == 0 && cantidadVocales[4] == 0) {
        respuesta = `En la frase ${texto_8} no aparece ninguna vocal.`;
        queFrase_8.innerHTML = respuesta;
        return false;
    }

    respuesta = `En la frase ${texto_8} tenemos:<br>`;
   
    if (cantidadVocales[0] != 0) {
        let textVocal = "vocal";
        if(cantidadVocales[0] > 1) {
            textVocal = "vocales";

        }
        respuesta +=` - ${cantidadVocales[0]} ${textVocal} a.<br>`;
    }
    if (cantidadVocales[1] != 0) {
        let textVocal = "vocal";
        if(cantidadVocales[1] > 1) {
            textVocal = "vocales";

        }
        respuesta +=` - ${cantidadVocales[1]} ${textVocal} e.<br>`;
    }
    if (cantidadVocales[2] != 0) {
        let textVocal = "vocal";
        if(cantidadVocales[2] > 1) {
            textVocal = "vocales";

        }
        respuesta +=` - ${cantidadVocales[2]} ${textVocal} i.<br>`;
    }
    if (cantidadVocales[3] != 0) {
        let textVocal = "vocal";
        if(cantidadVocales[3] > 1) {
            textVocal = "vocales";

        }
        respuesta +=` - ${cantidadVocales[3]} ${textVocal} o.<br>`;
    }
    if (cantidadVocales[4] != 0) {
        let textVocal = "vocal";
        if(cantidadVocales[4] > 1) {
            textVocal = "vocales";

        }
        respuesta +=` - ${cantidadVocales[4]} ${textVocal} u.<br>`;
    }
    
    queFrase_8.innerHTML = respuesta;
}