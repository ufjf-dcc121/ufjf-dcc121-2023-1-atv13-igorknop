let tabuleiro = ['p', 'p', 'p', null, 'b', 'b', 'b'];

export function getTabuleiro() {
    return structuredClone(tabuleiro);
}

export function mover(de, para) {
    const dist = para - de;
    if (Math.abs(dist) >= 3) {
        return false;
    }
    if (tabuleiro[para] !== null) {
        return false;
    }
    if (Math.abs(dist) === 2) {
        if (dist > 0 && tabuleiro[de + 1] === null) {
            return false;
        } else if (dist < 0 && tabuleiro[de - 1] === null) {
            return false;
        }
    }
    tabuleiro[para] = tabuleiro[de];
    tabuleiro[de] = null;
    return true;
}