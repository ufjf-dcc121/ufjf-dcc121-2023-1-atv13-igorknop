import { getTabuleiro } from "./state.js";

const eTabuleiro = document.querySelector(".tabuleiro");
//const disco = document.querySelector(".disco");



let arrastado = null;

setup();

function comecaArrastar(evento) {
    arrastado = evento.target;
}

function recebeAlgo(evento) {
    if (arrastado && evento.target.classList.contains('casa')) {
        evento.target.appendChild(arrastado);
        const posDisco = arrastado.dataset.posicao;
        const posCasa = evento.target.dataset.posicao;
        console.log(`moveu o disco de ${posDisco} para ${posCasa}`);
        arrastado = null;
    }
}
function passouPorCima(evento) {
    evento.preventDefault();
}

function setup() {
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < tabuleiro.length; i++) {
        const casa = tabuleiro[i];
        const eCasa = criaCasa(casa, i);
        eTabuleiro.appendChild(eCasa);
    }
}


function criaCasa(casa, k) {
    const eCasa = document.createElement('div');
    eCasa.dataset.posicao = k;
    eCasa.classList.add("casa");
    eCasa.addEventListener('dragover', passouPorCima);
    eCasa.addEventListener('drop', recebeAlgo);
    if (casa) {
        const eDisco = criaDisco(casa, k);
        eCasa.appendChild(eDisco);
    }
    return eCasa;
}

function criaDisco(casa, k) {
    const eDisco = document.createElement('div');
    eDisco.draggable = true;
    eDisco.dataset.posicao = k;
    eDisco.classList.add('disco');
    eDisco.addEventListener('dragstart', comecaArrastar);
    if (casa === 'p') {
        eDisco.classList.add('preto');
    } else {
        eDisco.classList.add('branco');
    }
    return eDisco;
}