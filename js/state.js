let tabuleiro = ['p', 'p', null, null, 'b', 'b', 'b'];

export function getTabuleiro() {
    return structuredClone(tabuleiro);
}

export function mover(de, para) {
    if (Math.abs(para - de) >= 3) {
        return false;
    }
    if(tabuleiro[para]!==null){
        return false;
    }
    tabuleiro[para] = tabuleiro[de];
    tabuleiro[de] = null;
    return true;
}