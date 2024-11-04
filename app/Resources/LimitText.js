//Place ... in big texts
export const LimitText = (texto, limite) => {
    if (texto.length > limite) {
        return texto.substring(0, limite) + '...';
    } else {
        return texto;
    }
}