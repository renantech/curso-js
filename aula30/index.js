const pessoa = {
    nome: 'Renan',
    sobrenome: 'Mendes',
    idade: 30,
    endereco: {
        rua: 'Rua Iretama',
        numero: 45
    },
    altura: 1.74
};


// Atribuição via desestruturação
const {nome, sobrenome, idade, endereco: {rua, numero}, endereco, ...resto} = pessoa;
console.log(rua, resto);