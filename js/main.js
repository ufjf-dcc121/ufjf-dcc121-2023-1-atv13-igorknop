const casas = document.querySelectorAll(".casa");
const disco = document.querySelector(".disco");

disco.addEventListener('dragstart', comecaArrastar);
for (let i = 0; i < casas.length; i++) {
    const casa = casas[i];
    casa.addEventListener('dragover', passouPorCima);
    casa.addEventListener('drop', recebeAlgo);
}

let arrastado = null;

function comecaArrastar(evento) {
    arrastado = evento.target;   
}

function recebeAlgo(evento){
    if(arrastado){
        evento.target.appendChild(arrastado);
        arrastado = null;
    }
}
function passouPorCima(evento){
    evento.preventDefault();
}