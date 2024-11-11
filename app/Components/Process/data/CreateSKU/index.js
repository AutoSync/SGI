export function CreateSKU(seed) {
    // Converte o seed em um número inteiro (pode ser substituído por uma lógica diferente para transformar a hash)
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0; // Converte para um número de 32 bits
    }

    // Função PRNG baseada na semente gerada pela hash
    function seededRandom() {
        const x = Math.sin(hash++) * 10000;
        return x - Math.floor(x);
    }

    // Gera um ID único
    const uniqueId = `id-${Math.floor(seededRandom() * 1e12).toString(36)}`;
    return uniqueId;
}