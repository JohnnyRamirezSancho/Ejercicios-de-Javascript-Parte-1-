function cuentaLetra(frase, letra) {
    let cantidad = 0;
    for (let indice = 0; indice < frase.length; indice++) {
        if(frase.charAt(indice)==letra) {
            cantidad++;
        }
   }

    return cantidad
}

function queFraseyLetra_7(){
    const frase_7 = document.getElementById('frase_7');
    const texto_7 = frase_7.value;
    const letra_7 = document.getElementById('letra_7');
    const caracter_7 = letra_7.value;
    const cantidadLetra = cuentaLetra(texto_7, caracter_7);
    const queFraseyLetra_7 = document.getElementById("queFraseyLetra_7");
    queFraseyLetra_7.innerHTML = `La letra <strong>${caracter_7}</strong> aparece <strong>${cantidadLetra} veces</strong> en la frase "${texto_7}"`;
}