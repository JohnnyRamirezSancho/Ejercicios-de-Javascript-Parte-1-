const dondeBuscar = document.getElementById('fraseDondeContarVocales');
const mostrarCuantasVocalesAparecen = document.getElementById("mostrarCuantasVocalesAparecen");

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

function cuantasVocalesAparecen() {
    mostrarCuantasVocalesAparecen.innerHTML = "";
    const fraseDondeContarVocales = dondeBuscar.value;
    const cuantasVocalesAparecen = queVocalesAparecen(fraseDondeContarVocales);
    let vocalesQueAparecen = 0;
    
    cuantasVocalesAparecen.forEach(vocal => {
        vocalesQueAparecen += vocal.cantidad;
    });

    if (vocalesQueAparecen == 0) {
        respuesta = `En el texto <strong>${fraseDondeContarVocales}</strong> no aparece ninguna vocal.`;
        mostrarCuantasVocalesAparecen.innerHTML = respuesta;
        return false;
    }

    respuesta = `En el texto <strong>${fraseDondeContarVocales}</strong> tenemos `;
   

    if (vocalesQueAparecen == 1) {
        respuesta += "una vocal.";
        mostrarCuantasVocalesAparecen.innerHTML = respuesta;
        return false;
    }

    respuesta += `${vocalesQueAparecen} vocales.`



   mostrarCuantasVocalesAparecen.innerHTML = respuesta;
}