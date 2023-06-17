export const altura = 1.73;
const nome = 'Renan';
const sobrenome = 'Mendes';
const idade = 18;

function soma(x, y) {
    return x + y;
}

export default function mult(x, y) {
    return x * y;
}

export class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome as sobrenome2, idade, soma };

// export { nome as default }