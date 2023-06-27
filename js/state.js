let tabuleiro = ['p', 'p', 'p', null, 'b', 'b', 'b'];

export function getTabuleiro() {
    return structuredClone(tabuleiro);
}

export function mover(de, para) {
    if (Math.abs(para - de) >= 3) {
        return false;
    }
    return true;
}