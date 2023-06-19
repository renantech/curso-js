const exp = require("constants");

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const outroNome = 'Bruno';

// exports.Pessoa = Pessoa;
module.exports = {
    Pessoa, outroNome
}