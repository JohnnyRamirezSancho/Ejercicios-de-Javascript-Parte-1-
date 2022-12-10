const divTitulo = document.getElementById('listaEjercicios');
for (count = 1; count<= 15; count++) {
    divTitulo.innerHTML += `<li><a href="./ex-${count}" target="_blank">Ejercicio ${count}</a></li>`
}