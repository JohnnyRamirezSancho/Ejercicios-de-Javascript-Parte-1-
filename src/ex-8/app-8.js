const dondeBuscar = document.getElementById('fraseDondeBuscar');
const mostrarQueVocalesAparecen = document.getElementById("mostrarQueVocalesAparecen");

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

function vocalesQueAparecen() {
    mostrarQueVocalesAparecen.innerHTML = "";
    const fraseDondeBuscar = dondeBuscar.value;
    const cuantasVocalesAparecen = queVocalesAparecen(fraseDondeBuscar);
    let vocalesQueAparecen = 0;
    let cuantasVocalesDiferentesAparecen = 0;
    
    cuantasVocalesAparecen.forEach(vocal => {
        vocalesQueAparecen += vocal.cantidad;
        if(vocal.cantidad > 0) {
            cuantasVocalesDiferentesAparecen++
        }
    });
    console.log(vocalesQueAparecen);
    if (vocalesQueAparecen == 0) {
        respuesta = `En el texto <strong>${fraseDondeBuscar}</strong> no aparece ninguna vocal.`;
        mostrarQueVocalesAparecen.innerHTML = respuesta;
        return false;
    }

    respuesta = `En el texto <strong>${fraseDondeBuscar}</strong> tenemos `;
   
    let textVocal = "las vocales: <br>";

    if (cuantasVocalesDiferentesAparecen == 1) {
        textVocal = "la vocal: <br> ";
    }

    respuesta += textVocal;

    cuantasVocalesAparecen.forEach(vocal => {
        if(vocal.cantidad != 0 ) {
            respuesta += `${vocal.letra}<br>`;
        }
    })
    
    mostrarQueVocalesAparecen.innerHTML = respuesta;
}