const pessoa = {
    nome: 'Renan',
    sobrenome: 'Mendes',
    idade: 18
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

console.log(criaPessoa('Renan', 'Mendes', 18));
console.log(criaPessoa('João', 'Gabriel', 17));
console.log(criaPessoa('Bruna', 'Oliveira', 22));
console.log(criaPessoa('Julia', 'Moreira', 29));

const pessoa1 = {
    nome: 'Renan',
    sobrenome: 'Mendes',
    idade: 18,

    fala() {
        console.log(`Olá! Meu nome é ${this.nome}, meu sobrenome é ${this.sobrenome} e tenho ${this.idade}`);
    }
}

pessoa1.fala();